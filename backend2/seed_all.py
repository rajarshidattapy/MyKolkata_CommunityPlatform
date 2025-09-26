#!/usr/bin/env python3
"""
Master seed script for FastAPI backend
Runs all individual seed scripts to populate the database
"""
import asyncio
import sys
import os
from dotenv import load_dotenv

# Add current directory to path
sys.path.append(os.path.dirname(__file__))

# Load environment variables
load_dotenv()

# Import all seed functions
from seed_communities import seed_communities
from seed_marketplace import seed_marketplace  
from seed_news import seed_news
from seed_places import seed_places
from seed_pandals import seed_pandals
from seed_regions import seed_regions
from seed_tinder_profiles import seed_tinder_profiles
from seed_transport import seed_transport

async def run_all_seeds():
    """Run all seed scripts in sequence"""
    print("🌱 Starting database seeding process...")
    print("=" * 50)
    
    seed_functions = [
        ("Communities", seed_communities),
        ("Marketplace", seed_marketplace),
        ("News", seed_news),
        ("Places", seed_places),
        ("Pandals", seed_pandals),
        ("Regions", seed_regions),
        ("Tinder Profiles", seed_tinder_profiles),
        ("Transport", seed_transport)
    ]
    
    success_count = 0
    total_count = len(seed_functions)
    
    for name, seed_func in seed_functions:
        try:
            print(f"\n🌱 Seeding {name}...")
            await seed_func()
            success_count += 1
            print(f"✅ {name} seeded successfully!")
        except Exception as e:
            print(f"❌ Failed to seed {name}: {e}")
    
    print("\n" + "=" * 50)
    print(f"🎯 Seeding completed: {success_count}/{total_count} successful")
    
    if success_count == total_count:
        print("🎉 All data seeded successfully!")
    else:
        print("⚠️ Some seeding operations failed. Check the logs above.")

async def seed_specific(collection_name):
    """Seed a specific collection"""
    seed_map = {
        "communities": seed_communities,
        "marketplace": seed_marketplace,
        "news": seed_news,
        "places": seed_places,
        "pandals": seed_pandals,
        "regions": seed_regions,
        "tinder": seed_tinder_profiles,
        "transport": seed_transport
    }
    
    if collection_name.lower() in seed_map:
        print(f"🌱 Seeding {collection_name}...")
        await seed_map[collection_name.lower()]()
        print(f"✅ {collection_name} seeded successfully!")
    else:
        print(f"❌ Unknown collection: {collection_name}")
        print(f"Available collections: {', '.join(seed_map.keys())}")

if __name__ == "__main__":
    # Check if specific collection is requested
    if len(sys.argv) > 1:
        collection_name = sys.argv[1]
        asyncio.run(seed_specific(collection_name))
    else:
        # Run all seeds
        asyncio.run(run_all_seeds())