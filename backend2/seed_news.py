#!/usr/bin/env python3
"""
Seed News data for FastAPI backend
"""
import asyncio
import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime

# Load environment variables
load_dotenv()

news_data = [
    {
        "title": "Anandabazar Patrika today",
        "description": "এগিয়ে থাকে,এগিয়ে রাখে।",
        "image": "/ana.jpg",
        "link": "https://epaper.anandabazar.com/",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "International Book Fair '25",
        "description": "The biggest literary event of the year! This year was great!",
        "image": "/bkf.avif",
        "link": "https://kolkatabookfair.net/download-ikbf-app",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "Kolkata Derby: EB vs MB",
        "description": "The age-old rivalry continues! Don't miss the epic clash this weekend.",
        "image": "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
        "link": "https://www.google.com/search?q=east+bengal+vs+mohun+bagan+match+today+kolkata&rlz=1C1VDKB_enIN1132IN1132&oq=east+bengal+vs+mohun+bagan+match+today+kolkata&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigAdIBCDc3OTRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

async def seed_news():
    """Seed news data to MongoDB"""
    mongo_uri = os.getenv("MONGO_URI")
    if not mongo_uri:
        print("❌ MONGO_URI environment variable not found")
        return
    
    try:
        # Connect to MongoDB
        client = AsyncIOMotorClient(mongo_uri)
        db = client.mykolkata_db
        collection = db.news
        
        print("🔗 Connected to MongoDB")
        
        # Clear existing data
        await collection.delete_many({})
        print("🗑️ Cleared existing news")
        
        # Insert new data
        result = await collection.insert_many(news_data)
        print(f"✅ News seeded successfully! Inserted {len(result.inserted_ids)} documents")
        
        # Close connection
        client.close()
        
    except Exception as e:
        print(f"❌ Seeding error: {e}")

if __name__ == "__main__":
    asyncio.run(seed_news())