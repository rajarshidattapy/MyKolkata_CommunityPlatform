from fastapi import APIRouter
router = APIRouter()

@router.get("/")
async def get_regions():
    return [{"id": "1", "name": "North Kolkata", "description": "Northern region"}]