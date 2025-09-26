from pydantic import BaseModel, Field
from typing import Optional
from .user import BaseDocument

class Region(BaseDocument):
    name: str = Field(..., description="Region name")
    description: str = Field(..., description="Region description")
    image: Optional[str] = Field(None, description="Region image URL")

class RegionCreate(BaseModel):
    name: str
    description: str
    image: Optional[str] = None

class RegionUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None