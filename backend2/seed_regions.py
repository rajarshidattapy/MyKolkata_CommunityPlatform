#!/usr/bin/env python3
"""
Seed Regions data for FastAPI backend
"""
import asyncio
import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime

# Load environment variables
load_dotenv()

regions_data = [
    {
        "name": "North Kolkata",
        "description": "Traditional pujas with heritage touch",
        "image": "https://assets.telegraphindia.com/telegraph/2021/Nov/1636726963_img_8377-jpg.jpg",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Central Kolkata",
        "description": "Modern themes with grand displays",
        "image": "https://www.shutterstock.com/shutterstock/videos/3485372951/thumb/1.jpg?ip=x480",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "South Kolkata",
        "description": "Contemporary art meets tradition",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Kolkata_South_Central_CBD_%2811%29.jpg",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

async def seed_regions():
    """Seed regions data to MongoDB"""
    mongo_uri = os.getenv("MONGO_URI")
    if not mongo_uri:
        print("❌ MONGO_URI environment variable not found")
        return
    
    try:
        # Connect to MongoDB
        client = AsyncIOMotorClient(mongo_uri)
        db = client.mykolkata_db
        collection = db.regions
        
        print("🔗 Connected to MongoDB")
        
        # Clear existing data
        await collection.delete_many({})
        print("🗑️ Cleared existing regions")
        
        # Insert new data
        result = await collection.insert_many(regions_data)
        print(f"✅ Regions seeded successfully! Inserted {len(result.inserted_ids)} documents")
        
        # Close connection
        client.close()
        
    except Exception as e:
        print(f"❌ Seeding error: {e}")

if __name__ == "__main__":
    asyncio.run(seed_regions())