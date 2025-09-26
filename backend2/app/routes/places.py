from fastapi import APIRouter, Depends, HTTPException
from typing import List, Dict, Any
from datetime import datetime
from ..models.place import Place, PlaceCreate, PlaceUpdate
from ..middleware.auth import get_current_user, get_current_user_optional
from ..core.database import get_database
from bson import ObjectId

router = APIRouter()

@router.get("/", response_model=List[Place])
async def get_places():
    """Get all places"""
    db = get_database()
    places = await db.places.find().to_list(100)
    return places

@router.get("/{place_id}", response_model=Place)
async def get_place(place_id: str):
    """Get a specific place by ID"""
    db = get_database()
    if not ObjectId.is_valid(place_id):
        raise HTTPException(status_code=400, detail="Invalid place ID")
    
    place = await db.places.find_one({"_id": ObjectId(place_id)})
    if not place:
        raise HTTPException(status_code=404, detail="Place not found")
    
    return place

@router.post("/", response_model=Place)
async def create_place(
    place_data: PlaceCreate,
    current_user: Dict[Any, Any] = Depends(get_current_user)
):
    """Create a new place (protected route)"""
    db = get_database()
    
    place_dict = place_data.dict()
    place_dict["created_by"] = current_user.get("sub")
    
    result = await db.places.insert_one(place_dict)
    created_place = await db.places.find_one({"_id": result.inserted_id})
    
    return created_place

@router.put("/{place_id}", response_model=Place)
async def update_place(
    place_id: str,
    place_data: PlaceUpdate,
    current_user: Dict[Any, Any] = Depends(get_current_user)
):
    """Update a place (protected route)"""
    db = get_database()
    
    if not ObjectId.is_valid(place_id):
        raise HTTPException(status_code=400, detail="Invalid place ID")
    
    # Only update non-None fields
    update_data = {k: v for k, v in place_data.dict().items() if v is not None}
    
    if not update_data:
        raise HTTPException(status_code=400, detail="No data to update")
    
    update_data["updated_at"] = datetime.utcnow()
    
    result = await db.places.update_one(
        {"_id": ObjectId(place_id)},
        {"$set": update_data}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Place not found")
    
    updated_place = await db.places.find_one({"_id": ObjectId(place_id)})
    return updated_place

@router.delete("/{place_id}")
async def delete_place(
    place_id: str,
    current_user: Dict[Any, Any] = Depends(get_current_user)
):
    """Delete a place (protected route)"""
    db = get_database()
    
    if not ObjectId.is_valid(place_id):
        raise HTTPException(status_code=400, detail="Invalid place ID")
    
    result = await db.places.delete_one({"_id": ObjectId(place_id)})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Place not found")
    
    return {"message": "Place deleted successfully"}