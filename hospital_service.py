from sqlalchemy.orm import Session
from ..models.hospital import Hospital

def create_hospital(db: Session, name: str, lat: float, lng: float):
    h = Hospital(name=name, lat=lat, lng=lng); db.add(h); db.commit(); db.refresh(h); return h

def list_hospitals(db: Session):
    return db.query(Hospital).all()
