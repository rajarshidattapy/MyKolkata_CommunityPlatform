from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, List
from datetime import datetime

class BaseDocument(BaseModel):
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True
    )
    
    id: Optional[str] = Field(default=None, alias="_id", description="MongoDB ObjectId")
    created_at: Optional[datetime] = Field(default_factory=datetime.utcnow)
    updated_at: Optional[datetime] = Field(default_factory=datetime.utcnow)

class UserProfile(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    avatar: Optional[str] = None

class User(BaseDocument):
    phone: str = Field(..., description="User's phone number")
    otp: Optional[str] = Field(None, description="OTP for verification")
    profile: Optional[UserProfile] = Field(default_factory=UserProfile)
    clerk_id: Optional[str] = Field(None, description="Clerk user ID")

class UserCreate(BaseModel):
    phone: str
    otp: Optional[str] = None
    profile: Optional[UserProfile] = None

class UserUpdate(BaseModel):
    phone: Optional[str] = None
    profile: Optional[UserProfile] = None