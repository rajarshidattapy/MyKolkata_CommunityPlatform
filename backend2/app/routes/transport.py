from fastapi import APIRouter
router = APIRouter()

@router.get("/")
async def get_transport():
    return [{"id": "1", "type": "Bus", "route": "Howrah to Sealdah"}]