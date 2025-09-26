from fastapi import APIRouter
router = APIRouter()

@router.get("/")
async def get_tinder_profiles():
    return [{"id": "1", "name": "Sample Profile", "age": 25}]