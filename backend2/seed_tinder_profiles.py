#!/usr/bin/env python3
"""
Seed Tinder Profiles data for FastAPI backend
"""
import asyncio
import os
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime

# Load environment variables
load_dotenv()

profiles_data = [
    {
        "name": "Victoria Memorial",
        "age": "100+",
        "bio": "Majestic marble building dedicated to Queen Victoria. Looking for history enthusiasts!",
        "image": "https://images.unsplash.com/photo-1558431382-27e303142255?w=800",
        "baseStars": 4.8,
        "averageStars": 4.8,
        "feedbacks": [],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Netaji Subhash Chandra Bose",
        "age": "150+",
        "bio": "Netaji Subhas Chandra Bose was a prominent Indian freedom fighter and leader who played a key role in India's struggle for independence, known for his leadership of the Indian National Army (INA) and his call for \"Give me blood, and I shall give you freedom.\"",
        "image": "nscb.webp",
        "baseStars": 4.9,
        "averageStars": 4.9,
        "feedbacks": [],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Jorasanko Thakur Bari, North Kolkata",
        "age": "80+",
        "bio": "Jorasanko Thakur Bari, the ancestral home of Rabindranath Tagore, offers visitors a glimpse into the rich cultural and literary history of Bengal, showcasing the life and legacy of the Nobel laureate.",
        "image": "jstb.jpg",
        "baseStars": 4.7,
        "averageStars": 4.7,
        "feedbacks": [],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Maidan",
        "age": "250+",
        "bio": "The British cleared a vast area of jungle and settlements around the fort to create an open space, primarily for military defense, which later became the Maidan.Today, it is the largest urban park in Kolkata and is often called the \"Lungs of Kolkata.\" It covers over 1,000 acres, stretching from Raj Bhavan to the Hooghly River, and is home to landmarks like the Victoria Memorial, Eden Gardens, and Shaheed Minar.",
        "image": "maidan.jpg",
        "baseStars": 4.6,
        "averageStars": 4.6,
        "feedbacks": [],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Indian Museum",
        "age": "210+",
        "bio": "It was founded in 1814, making it the oldest museum in India and one of the oldest in the world.",
        "image": "indmus.jpg",
        "baseStars": 4.5,
        "averageStars": 4.5,
        "feedbacks": [],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Dakshineswar Kali Temple",
        "age": "170+",
        "bio": "The Dakshineswar Kali Temple is one of the most famous temples in West Bengal, dedicated to Goddess Kali. It is located on the eastern bank of the Hooghly River in Dakshineswar, Kolkata.",
        "image": "dkt.jpg",
        "baseStars": 4.8,
        "averageStars": 4.8,
        "feedbacks": [],
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

async def seed_tinder_profiles():
    """Seed tinder profiles data to MongoDB"""
    mongo_uri = os.getenv("MONGO_URI")
    if not mongo_uri:
        print("❌ MONGO_URI environment variable not found")
        return
    
    try:
        # Connect to MongoDB
        client = AsyncIOMotorClient(mongo_uri)
        db = client.mykolkata_db
        collection = db.tinder_profiles
        
        print("🔗 Connected to MongoDB")
        
        # Clear existing data
        await collection.delete_many({})
        print("🗑️ Cleared existing tinder profiles")
        
        # Insert new data
        result = await collection.insert_many(profiles_data)
        print(f"✅ Tinder profiles seeded successfully! Inserted {len(result.inserted_ids)} documents")
        
        # Close connection
        client.close()
        
    except Exception as e:
        print(f"❌ Seeding error: {e}")

if __name__ == "__main__":
    asyncio.run(seed_tinder_profiles())