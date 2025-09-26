#!/usr/bin/env python3
"""
Seed Marketplace data for FastAPI backend
"""
import asyncio
import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime

# Load environment variables
load_dotenv()

marketplace_data = [
    {
        "title": "Handloom Sarees - Bengal's pride.",
        "location": "Gariahat Market",
        "price": "₹1,500 onwards",
        "image": "/sare.jpg",
        "link": "https://www.orangewayfarer.com/best-saree-shops-in-kolkata/",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "Bengali Sweets - The best of the best.",
        "location": "New Market",
        "price": "₹20 onwards",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
        "link": "https://balarammullick.com/",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "Bongmade - Bengali Merch with a modern twist.",
        "location": "Online",
        "price": "₹199 onwards",
        "image": "/shirt.webp",
        "link": "https://bongmade.com/",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

async def seed_marketplace():
    """Seed marketplace data to MongoDB"""
    mongo_uri = os.getenv("MONGO_URI")
    if not mongo_uri:
        print("❌ MONGO_URI environment variable not found")
        return
    
    try:
        # Connect to MongoDB
        client = AsyncIOMotorClient(mongo_uri)
        db = client.mykolkata_db
        collection = db.marketplace_items
        
        print("🔗 Connected to MongoDB")
        
        # Clear existing data
        await collection.delete_many({})
        print("🗑️ Cleared existing marketplace items")
        
        # Insert new data
        result = await collection.insert_many(marketplace_data)
        print(f"✅ Marketplace items seeded successfully! Inserted {len(result.inserted_ids)} documents")
        
        # Close connection
        client.close()
        
    except Exception as e:
        print(f"❌ Seeding error: {e}")

if __name__ == "__main__":
    asyncio.run(seed_marketplace())