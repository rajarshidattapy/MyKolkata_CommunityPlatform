#!/usr/bin/env python3
"""
Seed Pandals data for FastAPI backend
"""
import asyncio
import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime

# Load environment variables
load_dotenv()

pandals_data = [
    {
        "name": "Bagbazar Sarbojanin",
        "location": "Bagbazar, Kolkata",
        "description": "One of the oldest and most popular Durga Puja celebrations in Kolkata, known for its traditional approach and cultural significance.",
        "image": "https://images.unsplash.com/photo-1601181487375-f2194c87a04b?w=800",
        "distance": "2.5 km",
        "rating": 4.8,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Mohammad Ali Park",
        "location": "Central Kolkata",
        "description": "Famous for its unique themes and elaborate decorations, this pandal attracts thousands of visitors every year.",
        "image": "https://images.unsplash.com/photo-1601931935934-17c3717239ab?w=800",
        "distance": "3.1 km",
        "rating": 4.6,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "College Square",
        "location": "College Street",
        "description": "Known for its stunning water body reflections and lighting arrangements, making it a photographer's paradise.",
        "image": "https://images.unsplash.com/photo-1592305029529-4a6a3d0cde1c?w=800",
        "distance": "1.8 km",
        "rating": 4.7,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Victoria Memorial",
        "location": "Central Kolkata",
        "description": "Historic marble building and museum showcasing British-era architecture.",
        "image": "https://images.unsplash.com/photo-1558431382-27e303142255?w=800",
        "distance": "4.2 km",
        "rating": 4.9,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

async def seed_pandals():
    """Seed pandals data to MongoDB"""
    mongo_uri = os.getenv("MONGO_URI")
    if not mongo_uri:
        print("❌ MONGO_URI environment variable not found")
        return
    
    try:
        # Connect to MongoDB
        client = AsyncIOMotorClient(mongo_uri)
        db = client.mykolkata_db
        collection = db.pandals
        
        print("🔗 Connected to MongoDB")
        
        # Clear existing data
        await collection.delete_many({})
        print("🗑️ Cleared existing pandals")
        
        # Insert new data
        result = await collection.insert_many(pandals_data)
        print(f"✅ Pandals seeded successfully! Inserted {len(result.inserted_ids)} documents")
        
        # Close connection
        client.close()
        
    except Exception as e:
        print(f"❌ Seeding error: {e}")

if __name__ == "__main__":
    asyncio.run(seed_pandals())