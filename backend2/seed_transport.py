#!/usr/bin/env python3
"""
Seed Transport data for FastAPI backend
"""
import asyncio
import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime

# Load environment variables
load_dotenv()

transport_data = [
    # Auto Stands
    {
        "category": "auto",
        "name": "Gariahat Crossing",
        "distance": "0.3 km",
        "time": "2 mins",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "auto",
        "name": "Rashbehari Crossing",
        "distance": "0.8 km",
        "time": "5 mins",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "auto",
        "name": "Golpark",
        "distance": "1.2 km",
        "time": "7 mins",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    # Bus Stands
    {
        "category": "bus",
        "name": "Gariahat Bus Stop",
        "distance": "0.5 km",
        "time": "5 mins",
        "routes": ["S24", "VS5", "47B"],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "bus",
        "name": "Ballygunge Phari",
        "distance": "1.2 km",
        "time": "8 mins",
        "routes": ["S24", "VS5", "47B"],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "bus",
        "name": "Golpark Bus Stand",
        "distance": "1.5 km",
        "time": "10 mins",
        "routes": ["S24", "VS5", "47B"],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    # Taxi Stands
    {
        "category": "taxi",
        "name": "Gariahat Taxi Stand",
        "distance": "0.4 km",
        "time": "3 mins",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "taxi",
        "name": "Ballygunge Station",
        "distance": "1.0 km",
        "time": "6 mins",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "taxi",
        "name": "Southern Avenue",
        "distance": "1.3 km",
        "time": "8 mins",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    # Metro - Nearest
    {
        "category": "metro",
        "name": "Kalighat Metro",
        "distance": "0.8 km",
        "time": "10 mins walk",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "metro",
        "name": "Jatin Das Park",
        "distance": "1.2 km",
        "time": "15 mins walk",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "metro",
        "name": "Maidan",
        "distance": "1.5 km",
        "time": "18 mins walk",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    # Metro - North Line
    {
        "category": "metro",
        "from_station": "Kavi Subhash",
        "to_station": "Dakshineswar",
        "time": "10:00 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "metro",
        "from_station": "Dakshineswar",
        "to_station": "Kavi Subhash",
        "time": "10:15 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "metro",
        "from_station": "Kavi Subhash",
        "to_station": "Dakshineswar",
        "time": "10:30 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    # Metro - Dakshineswar Line
    {
        "category": "metro",
        "from_station": "Dakshineswar",
        "to_station": "Kavi Subhash",
        "time": "10:05 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "metro",
        "from_station": "Kavi Subhash",
        "to_station": "Dakshineswar",
        "time": "10:20 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "metro",
        "from_station": "Dakshineswar",
        "to_station": "Kavi Subhash",
        "time": "10:35 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    # Train - Howrah
    {
        "category": "train",
        "name": "Bandel Local",
        "platform": "1",
        "time": "10:30 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "train",
        "name": "Burdwan Express",
        "platform": "3",
        "time": "11:00 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "train",
        "name": "Katwa Local",
        "platform": "2",
        "time": "11:30 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    # Train - Sealdah
    {
        "category": "train",
        "name": "Barrackpore Local",
        "platform": "1",
        "time": "10:45 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "train",
        "name": "Naihati Local",
        "platform": "2",
        "time": "11:15 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "train",
        "name": "Krishnanagar Express",
        "platform": "4",
        "time": "11:45 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    # Train - Santragachi
    {
        "category": "train",
        "name": "Kharagpur Local",
        "platform": "1",
        "time": "10:15 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "train",
        "name": "Midnapore Express",
        "platform": "2",
        "time": "10:45 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "train",
        "name": "Haldia Local",
        "platform": "3",
        "time": "11:15 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    # Train - Shalimar
    {
        "category": "train",
        "name": "Puri Express",
        "platform": "1",
        "time": "10:00 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "train",
        "name": "Digha Local",
        "platform": "2",
        "time": "10:30 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "category": "train",
        "name": "Kharagpur Fast",
        "platform": "1",
        "time": "11:00 AM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

async def seed_transport():
    """Seed transport data to MongoDB"""
    mongo_uri = os.getenv("MONGO_URI")
    if not mongo_uri:
        print("❌ MONGO_URI environment variable not found")
        return
    
    try:
        # Connect to MongoDB
        client = AsyncIOMotorClient(mongo_uri)
        db = client.mykolkata_db
        collection = db.transport
        
        print("🔗 Connected to MongoDB")
        
        # Clear existing data
        await collection.delete_many({})
        print("🗑️ Cleared existing transport data")
        
        # Insert new data
        result = await collection.insert_many(transport_data)
        print(f"✅ Transport data seeded successfully! Inserted {len(result.inserted_ids)} documents")
        
        # Close connection
        client.close()
        
    except Exception as e:
        print(f"❌ Seeding error: {e}")

if __name__ == "__main__":
    asyncio.run(seed_transport())