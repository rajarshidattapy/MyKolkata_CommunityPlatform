from pydantic import BaseModel, Field
from typing import Optional
from .user import BaseDocument

class Place(BaseDocument):
    name: str = Field(..., description="Place name")
    description: Optional[str] = Field(None, description="Place description")
    image: Optional[str] = Field(None, description="Place image URL")
    location: Optional[str] = Field(None, description="Place location")
    type: Optional[str] = Field(None, description="Type of place (e.g., Cafe, Monument, Museum)")
    rating: Optional[float] = Field(None, ge=0, le=5, description="Place rating (0-5)")
    status: Optional[str] = Field(None, description="Current status (e.g., 'Open now', 'Closes at 5 PM')")

class PlaceCreate(BaseModel):
    name: str
    description: Optional[str] = None
    image: Optional[str] = None
    location: Optional[str] = None
    type: Optional[str] = None
    rating: Optional[float] = Field(None, ge=0, le=5)
    status: Optional[str] = None

class PlaceUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    location: Optional[str] = None
    type: Optional[str] = None
    rating: Optional[float] = Field(None, ge=0, le=5)
    status: Optional[str] = None