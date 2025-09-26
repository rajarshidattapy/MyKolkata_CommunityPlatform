#!/usr/bin/env python3
"""
Seed Places data for FastAPI backend
"""
import asyncio
import os
import subprocess
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime

# Load environment variables
load_dotenv()

def fetch_external_rating(place, city="Kolkata"):
    """Fetch external rating using Python script"""
    try:
        result = subprocess.run(
            ["python", "fetch_justdial_rating.py", place, city],
            capture_output=True,
            text=True,
            cwd=os.path.dirname(__file__)
        )
        rating = float(result.stdout.strip())
        return rating if not (rating != rating) else 3.0  # Check for NaN
    except:
        return 3.0

places_data = [
    # Cafes
    {
        "name": "Flurys",
        "type": "Cafe",
        "location": "Park Street",
        "description": "Iconic cafe known for its European-style cakes and pastries.",
        "image": "/flury.avif",
        "rating": 4.5,
        "status": "Open now",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Paris Cafe",
        "type": "Cafe",
        "location": "Park Street",
        "description": "Cozy cafe serving French pastries and coffee.",
        "image": "/street.jpg",
        "rating": 4.3,
        "status": "Open now",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Mocambo",
        "type": "Cafe",
        "location": "Park Street",
        "description": "Vintage restaurant with Continental cuisine.",
        "image": "/moc.jpg",
        "rating": 4.6,
        "status": "Open now",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    # Kolkata Attractions
    {
        "name": "Victoria Memorial",
        "type": "Monument",
        "location": "Central Kolkata",
        "description": "Majestic marble building and museum.",
        "image": "https://images.unsplash.com/photo-1558431382-27e303142255?w=800",
        "rating": 4.8,
        "status": "Open now",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Howrah Bridge",
        "type": "Bridge",
        "location": "Howrah",
        "description": "Iconic cantilever bridge over Hooghly River.",
        "image": "/hwh.jpg",
        "rating": 4.7,
        "status": "Open now",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Indian Museum",
        "type": "Museum",
        "location": "Park Street",
        "description": "Oldest and largest museum in India.",
        "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800",
        "rating": 4.5,
        "status": "Closes at 5 PM",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    # West Bengal Destinations
    {
        "name": "Darjeeling",
        "type": "Hill Station",
        "location": "West Bengal",
        "description": "Queen of Hills with tea gardens and mountain views.",
        "image": "/dar.webp",
        "rating": 4.8,
        "status": "Open now",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Sundarbans",
        "type": "Forest",
        "location": "West Bengal",
        "description": "World's largest mangrove forest.",
        "image": "/sundarban.jpg",
        "rating": 4.7,
        "status": "Open now",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "name": "Digha",
        "type": "Beach",
        "location": "West Bengal",
        "description": "Popular beach destination.",
        "image": "/dig.jpg",
        "rating": 4.4,
        "status": "Open now",
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

async def seed_places():
    """Seed places data to MongoDB"""
    mongo_uri = os.getenv("MONGO_URI")
    if not mongo_uri:
        print("❌ MONGO_URI environment variable not found")
        return
    
    try:
        # Connect to MongoDB
        client = AsyncIOMotorClient(mongo_uri)
        db = client.mykolkata_db
        places_collection = db.places
        tinder_collection = db.tinder_profiles
        
        print("🔗 Connected to MongoDB")
        
        # Clear existing data
        await places_collection.delete_many({})
        await tinder_collection.delete_many({})
        print("🗑️ Cleared existing places and tinder profiles")
        
        # Insert places data
        result = await places_collection.insert_many(places_data)
        print(f"✅ Places seeded successfully! Inserted {len(result.inserted_ids)} documents")
        
        # Create TinderProfiles from places data
        tinder_profiles = []
        for place in places_data:
            base_stars = fetch_external_rating(place["name"], "Kolkata")
            tinder_profile = {
                "name": place["name"],
                "age": "",
                "bio": place["description"],
                "image": place["image"],
                "baseStars": base_stars,
                "averageStars": base_stars,
                "feedbacks": [],
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            }
            tinder_profiles.append(tinder_profile)
        
        # Insert tinder profiles
        tinder_result = await tinder_collection.insert_many(tinder_profiles)
        print(f"✅ Tinder profiles seeded successfully! Inserted {len(tinder_result.inserted_ids)} documents")
        
        # Close connection
        client.close()
        
    except Exception as e:
        print(f"❌ Seeding error: {e}")

if __name__ == "__main__":
    asyncio.run(seed_places())