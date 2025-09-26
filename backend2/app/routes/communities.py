from fastapi import APIRouter, Depends
from typing import List, Dict, Any
from ..middleware.auth import get_current_user_optional

router = APIRouter()

@router.get("/")
async def get_communities():
    """Get all communities"""
    # Mock data for now - replace with actual database calls
    return [
        {"id": "1", "name": "Kolkata Photography", "description": "Photography enthusiasts", "icon": "FaCamera"},
        {"id": "2", "name": "Food Lovers", "description": "Explore Kolkata's cuisine", "icon": "FaUtensils"}
    ]

@router.post("/")
async def create_community(
    community_data: dict,
    current_user: Dict[Any, Any] = Depends(get_current_user_optional)
):
    """Create a new community"""
    return {"message": "Community created", "data": community_data}