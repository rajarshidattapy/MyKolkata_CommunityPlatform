from fastapi import APIRouter
router = APIRouter()

@router.get("/")
async def get_news():
    return [{"id": "1", "title": "Sample News", "content": "News content"}]