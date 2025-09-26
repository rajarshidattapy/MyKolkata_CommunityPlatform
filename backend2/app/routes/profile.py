from fastapi import APIRouter, Depends
from typing import Dict, Any
from ..middleware.auth import get_current_user

router = APIRouter()

@router.get("/")
async def get_profile(current_user: Dict[Any, Any] = Depends(get_current_user)):
    """Get user profile"""
    return {
        "user_id": current_user.get("sub"),
        "email": current_user.get("email"),
        "name": current_user.get("name", "User")
    }