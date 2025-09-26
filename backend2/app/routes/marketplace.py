from fastapi import APIRouter
router = APIRouter()

@router.get("/")
async def get_marketplace():
    return [{"id": "1", "title": "Sample Item", "price": 100}]