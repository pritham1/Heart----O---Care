from pydantic import BaseModel

class HospitalIn(BaseModel):
    name: str
    lat: float
    lng: float

class HospitalOut(BaseModel):
    id: int
    name: str
    lat: float
    lng: float
    class Config:
        orm_mode = True
