from pydantic import BaseModel, Field
from typing import Optional
from .user import BaseDocument

class News(BaseDocument):
    title: str = Field(..., description="News title")
    description: str = Field(..., description="News description")
    image: Optional[str] = Field(None, description="News image URL")
    link: Optional[str] = Field(None, description="News article link")

class NewsCreate(BaseModel):
    title: str
    description: str
    image: Optional[str] = None
    link: Optional[str] = None

class NewsUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    link: Optional[str] = None