from pydantic import BaseModel, Field
from typing import Optional
from .user import BaseDocument

class Community(BaseDocument):
    name: str = Field(..., description="Community name")
    description: Optional[str] = Field(None, description="Community description")
    link: Optional[str] = Field(None, description="Community link/URL")
    icon: Optional[str] = Field(None, description="Icon identifier (e.g., 'FaInstagram', 'FaMeetup')")

class CommunityCreate(BaseModel):
    name: str
    description: Optional[str] = None
    link: Optional[str] = None
    icon: Optional[str] = None

class CommunityUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    link: Optional[str] = None
    icon: Optional[str] = None