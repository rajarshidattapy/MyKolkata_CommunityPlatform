from fastapi import APIRouter
router = APIRouter()

@router.post("/")
async def submit_contribution(contribution_data: dict):
    return {"message": "Contribution submitted", "data": contribution_data}