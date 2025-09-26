from fastapi import APIRouter, Depends, HTTPException
from typing import Dict, Any
from ..middleware.auth import get_current_user, get_current_user_optional

router = APIRouter()

@router.get("/me")
async def get_current_user_info(
    current_user: Dict[Any, Any] = Depends(get_current_user)
):
    """Get current authenticated user information"""
    return {
        "user": current_user,
        "message": "User authenticated successfully"
    }

@router.post("/verify")
async def verify_token(
    current_user: Dict[Any, Any] = Depends(get_current_user)
):
    """Verify authentication token"""
    return {
        "valid": True,
        "user_id": current_user.get("sub"),
        "email": current_user.get("email")
    }

@router.get("/status")
async def auth_status(
    current_user: Dict[Any, Any] = Depends(get_current_user_optional)
):
    """Check authentication status (optional auth)"""
    if current_user:
        return {
            "authenticated": True,
            "user_id": current_user.get("sub")
        }
    else:
        return {
            "authenticated": False,
            "user_id": None
        }