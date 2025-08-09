from pydantic import BaseModel

class SymptomIn(BaseModel):
    name: str
    severity: str

class SymptomOut(BaseModel):
    id: int
    name: str
    severity: str
    class Config:
        orm_mode = True
