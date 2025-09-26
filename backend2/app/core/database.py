from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import MongoClient
import os
from typing import Optional

class Database:
    client: Optional[AsyncIOMotorClient] = None
    database = None

db = Database()

async def connect_to_mongo():
    """Create database connection"""
    mongo_uri = os.getenv("MONGO_URI")
    database_name = os.getenv("DATABASE_NAME", "mykolkata")
    
    if not mongo_uri:
        raise ValueError("MONGO_URI environment variable is not set")
    
    db.client = AsyncIOMotorClient(mongo_uri)
    db.database = db.client[database_name]
    
    # Test the connection
    try:
        await db.client.admin.command('ping')
        print(f"✅ Connected to MongoDB database: {database_name}")
    except Exception as e:
        print(f"❌ Failed to connect to MongoDB: {e}")
        raise

async def close_mongo_connection():
    """Close database connection"""
    if db.client:
        db.client.close()
        print("🔌 Disconnected from MongoDB")

def get_database():
    """Get database instance"""
    return db.database