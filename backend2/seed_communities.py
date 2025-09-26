#!/usr/bin/env python3
"""
Seed Communities data for FastAPI backend
"""
import asyncio
import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime

# Load environment variables
load_dotenv()

communities_data = [
    {
        "name": "GDG Kolkata",
        "description": "Google Developer Group Kolkata - Tech community",
        "link": "https://gdg.community.dev/gdg-kolkata/",
        "icon": "FaMeetup",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "TFUG Kolkata",
        "description": "TensorFlow User Group Kolkata",
        "link": "https://www.tensorflow.org/community/groups",
        "icon": "FaMeetup",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Calcutta Instagrammers",
        "description": "Photography and city stories",
        "link": "https://www.instagram.com/calcutta.instagrammers/",
        "icon": "FaInstagram",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Streets of Calcutta",
        "description": "Daily life and culture",
        "link": "https://www.instagram.com/streetsofcalcutta/",
        "icon": "FaInstagram",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

async def seed_communities():
    """Seed communities data to MongoDB"""
    mongo_uri = os.getenv("MONGO_URI")
    if not mongo_uri:
        print("❌ MONGO_URI environment variable not found")
        return
    
    try:
        # Connect to MongoDB
        client = AsyncIOMotorClient(mongo_uri)
        db = client.mykolkata_db
        collection = db.communities
        
        print("🔗 Connected to MongoDB")
        
        # Clear existing data
        await collection.delete_many({})
        print("🗑️ Cleared existing communities")
        
        # Insert new data
        result = await collection.insert_many(communities_data)
        print(f"✅ Communities seeded successfully! Inserted {len(result.inserted_ids)} documents")
        
        # Close connection
        client.close()
        
    except Exception as e:
        print(f"❌ Seeding error: {e}")

if __name__ == "__main__":
    asyncio.run(seed_communities())