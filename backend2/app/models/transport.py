from pydantic import BaseModel, Field
from typing import Optional, List
from .user import BaseDocument

class Transport(BaseDocument):
    category: str = Field(..., description="Transport category (auto, bus, taxi, metro, train)")
    name: Optional[str] = Field(None, description="Transport/station name")
    distance: Optional[str] = Field(None, description="Distance from location")
    time: Optional[str] = Field(None, description="Time to reach or departure time")
    routes: Optional[List[str]] = Field(None, description="Available routes (for buses)")
    from_station: Optional[str] = Field(None, description="Origin station (for metro/train)")
    to_station: Optional[str] = Field(None, description="Destination station (for metro/train)")
    platform: Optional[str] = Field(None, description="Platform number (for trains)")

class TransportCreate(BaseModel):
    category: str
    name: Optional[str] = None
    distance: Optional[str] = None
    time: Optional[str] = None
    routes: Optional[List[str]] = None
    from_station: Optional[str] = None
    to_station: Optional[str] = None
    platform: Optional[str] = None

class TransportUpdate(BaseModel):
    category: Optional[str] = None
    name: Optional[str] = None
    distance: Optional[str] = None
    time: Optional[str] = None
    routes: Optional[List[str]] = None
    from_station: Optional[str] = None
    to_station: Optional[str] = None
    platform: Optional[str] = None