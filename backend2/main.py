# Load environment variables first
import os
from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import uvicorn

from app.core.database import connect_to_mongo, close_mongo_connection, get_database
from app.routes import auth, communities, marketplace, news, pandals, places, profile, regions, tinderProfiles, transport, contribute
from app.seeder import DatabaseSeeder
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("🚀 Starting MyKolkata FastAPI Backend...")
    await connect_to_mongo()
    
    # Auto-seed database with initial data
    try:
        database = get_database()
        if database is not None:
            seeder = DatabaseSeeder(database)
            await seeder.seed_all_collections(force_reseed=False)
            
            # Log database statistics
            stats = await seeder.get_database_stats()
            logger.info("📊 Database Statistics:")
            for collection, count in stats.items():
                logger.info(f"   {collection}: {count} documents")
        else:
            logger.warning("⚠️ Database not connected, skipping seeding")
            
    except Exception as e:
        logger.error(f"❌ Error during database seeding: {e}")
    
    logger.info("✅ Backend startup completed!")
    yield
    
    # Shutdown
    logger.info("🛑 Shutting down MyKolkata FastAPI Backend...")
    await close_mongo_connection()

app = FastAPI(
    title="MyKolkata Community Platform API",
    description="FastAPI backend for MyKolkata community platform",
    version="2.0.0",
    lifespan=lifespan
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(communities.router, prefix="/api/communities", tags=["communities"])
app.include_router(marketplace.router, prefix="/api/marketplace", tags=["marketplace"])
app.include_router(news.router, prefix="/api/news", tags=["news"])
app.include_router(pandals.router, prefix="/api/pandals", tags=["pandals"])
app.include_router(places.router, prefix="/api/places", tags=["places"])
app.include_router(profile.router, prefix="/api/profile", tags=["profile"])
app.include_router(regions.router, prefix="/api/regions", tags=["regions"])
app.include_router(tinderProfiles.router, prefix="/api/tinder-profiles", tags=["tinder"])
app.include_router(transport.router, prefix="/api/transport", tags=["transport"])
app.include_router(contribute.router, prefix="/api/contribute", tags=["contribute"])

@app.get("/")
async def root():
    return {"message": "MyKolkata FastAPI Backend", "version": "2.0.0"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "MyKolkata API"}

@app.get("/database/stats")
async def database_statistics():
    """Get database collection statistics"""
    try:
        database = get_database()
        if database is not None:
            seeder = DatabaseSeeder(database)
            stats = await seeder.get_database_stats()
            return {
                "status": "success",
                "statistics": stats,
                "total_documents": sum(stats.values())
            }
        else:
            return {"status": "error", "message": "Database not connected"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

@app.post("/database/reseed")
async def reseed_database(force: bool = False):
    """Manually trigger database reseeding"""
    try:
        database = get_database()
        if database is not None:
            seeder = DatabaseSeeder(database)
            total_seeded = await seeder.seed_all_collections(force_reseed=force)
            stats = await seeder.get_database_stats()
            return {
                "status": "success", 
                "message": f"Database reseeded successfully",
                "documents_processed": total_seeded,
                "statistics": stats
            }
        else:
            return {"status": "error", "message": "Database not connected"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=int(os.getenv("PORT", 5001)),
        reload=True
    )