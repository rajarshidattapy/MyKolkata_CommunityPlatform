from pydantic import BaseModel, Field
from typing import Optional, List
from .user import BaseDocument

class TinderFeedback(BaseModel):
    user_id: str = Field(..., description="User ID who gave feedback")
    stars: int = Field(..., ge=1, le=5, description="Star rating (1-5)")
    comment: Optional[str] = Field(None, description="Optional comment")

class TinderProfile(BaseDocument):
    name: str = Field(..., description="Profile name")
    age: str = Field(..., description="Age or age range")
    bio: str = Field(..., description="Profile bio/description")
    image: str = Field(..., description="Profile image URL")
    baseStars: Optional[float] = Field(3.0, description="Base star rating")
    averageStars: Optional[float] = Field(3.0, description="Average star rating from user feedback")
    feedbacks: List[TinderFeedback] = Field(default_factory=list, description="User feedbacks")

class TinderProfileCreate(BaseModel):
    name: str
    age: str
    bio: str
    image: str
    baseStars: Optional[float] = 3.0
    averageStars: Optional[float] = 3.0
    feedbacks: List[TinderFeedback] = []

class TinderProfileUpdate(BaseModel):
    name: Optional[str] = None
    age: Optional[str] = None
    bio: Optional[str] = None
    image: Optional[str] = None
    baseStars: Optional[float] = None
    averageStars: Optional[float] = None
    feedbacks: Optional[List[TinderFeedback]] = None