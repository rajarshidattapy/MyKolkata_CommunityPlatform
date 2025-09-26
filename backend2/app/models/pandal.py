from pydantic import BaseModel, Field
from typing import Optional
from .user import BaseDocument

class Pandal(BaseDocument):
    name: str = Field(..., description="Pandal name")
    location: str = Field(..., description="Pandal location")
    description: str = Field(..., description="Pandal description")
    image: Optional[str] = Field(None, description="Pandal image URL")
    distance: Optional[str] = Field(None, description="Distance from user")
    rating: Optional[float] = Field(None, ge=0, le=5, description="Pandal rating (0-5)")

class PandalCreate(BaseModel):
    name: str
    location: str
    description: str
    image: Optional[str] = None
    distance: Optional[str] = None
    rating: Optional[float] = Field(None, ge=0, le=5)

class PandalUpdate(BaseModel):
    name: Optional[str] = None
    location: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    distance: Optional[str] = None
    rating: Optional[float] = Field(None, ge=0, le=5)