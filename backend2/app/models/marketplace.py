from pydantic import BaseModel, Field
from typing import Optional
from .user import BaseDocument

class MarketplaceItem(BaseDocument):
    title: str = Field(..., description="Item title")
    location: str = Field(..., description="Item location")
    price: str = Field(..., description="Item price")
    image: Optional[str] = Field(None, description="Item image URL")  
    link: Optional[str] = Field(None, description="Item link/URL")

class MarketplaceItemCreate(BaseModel):
    title: str
    location: str
    price: str
    image: Optional[str] = None
    link: Optional[str] = None

class MarketplaceItemUpdate(BaseModel):
    title: Optional[str] = None
    location: Optional[str] = None
    price: Optional[str] = None
    image: Optional[str] = None
    link: Optional[str] = None