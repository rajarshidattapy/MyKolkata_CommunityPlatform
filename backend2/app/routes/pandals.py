from fastapi import APIRouter
router = APIRouter()

@router.get("/")
async def get_pandals():
    return [{"id": "1", "name": "Sample Pandal", "location": "Kolkata"}]