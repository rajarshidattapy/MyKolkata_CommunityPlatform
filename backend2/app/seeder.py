"""
Database seeder service for FastAPI backend
Automatically loads seed data on application startup
"""
import logging
from motor.motor_asyncio import AsyncIOMotorDatabase
from datetime import datetime
from typing import List, Dict, Any

from .seed_data import (
    COMMUNITIES_DATA, MARKETPLACE_DATA, NEWS_DATA, PLACES_DATA,
    PANDALS_DATA, REGIONS_DATA, TINDER_PROFILES_DATA, TRANSPORT_DATA
)

logger = logging.getLogger(__name__)

class DatabaseSeeder:
    def __init__(self, db: AsyncIOMotorDatabase):
        self.db = db

    async def seed_collection(self, collection_name: str, data: List[Dict[str, Any]], clear_existing: bool = False):
        """Seed a specific collection with data"""
        try:
            collection = self.db[collection_name]
            
            # Check if data already exists
            existing_count = await collection.count_documents({})
            
            if existing_count > 0 and not clear_existing:
                logger.info(f"📊 {collection_name}: {existing_count} documents already exist, skipping seed")
                return existing_count
            
            if clear_existing and existing_count > 0:
                await collection.delete_many({})
                logger.info(f"🗑️ Cleared {existing_count} existing documents from {collection_name}")
            
            # Add timestamps to all documents
            timestamped_data = []
            for item in data:
                item_with_timestamps = item.copy()
                item_with_timestamps.update({
                    "created_at": datetime.utcnow(),
                    "updated_at": datetime.utcnow()
                })
                timestamped_data.append(item_with_timestamps)
            
            # Insert new data
            if timestamped_data:
                result = await collection.insert_many(timestamped_data)
                logger.info(f"✅ {collection_name}: Seeded {len(result.inserted_ids)} documents")
                return len(result.inserted_ids)
            
            return 0
            
        except Exception as e:
            logger.error(f"❌ Error seeding {collection_name}: {e}")
            return 0

    async def seed_all_collections(self, force_reseed: bool = False):
        """Seed all collections with their respective data"""
        logger.info("🌱 Starting database seeding process...")
        
        seed_config = [
            ("communities", COMMUNITIES_DATA),
            ("marketplace_items", MARKETPLACE_DATA),
            ("news", NEWS_DATA),
            ("places", PLACES_DATA),
            ("pandals", PANDALS_DATA),
            ("regions", REGIONS_DATA),
            ("tinder_profiles", TINDER_PROFILES_DATA),
            ("transport", TRANSPORT_DATA)
        ]
        
        total_seeded = 0
        
        for collection_name, data in seed_config:
            count = await self.seed_collection(collection_name, data, clear_existing=force_reseed)
            total_seeded += count
        
        logger.info(f"🎯 Database seeding completed: {total_seeded} total documents processed")
        return total_seeded

    async def get_database_stats(self):
        """Get statistics about all collections"""
        stats = {}
        collections = [
            "communities", "marketplace_items", "news", "places",
            "pandals", "regions", "tinder_profiles", "transport", "users"
        ]
        
        for collection_name in collections:
            try:
                count = await self.db[collection_name].count_documents({})
                stats[collection_name] = count
            except Exception as e:
                logger.error(f"Error getting stats for {collection_name}: {e}")
                stats[collection_name] = 0
        
        return stats