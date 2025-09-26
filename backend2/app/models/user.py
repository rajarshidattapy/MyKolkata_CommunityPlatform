from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, List
from datetime import datetime
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_pydantic_json_schema__(cls, field_schema):
        field_schema.update(type="string")
        return field_schema

    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

class BaseDocument(BaseModel):
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_encoders={ObjectId: str}
    )
    
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
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