from fastapi import APIRouter
from ..database import SessionLocal
from ..models.hospital import Hospital
from ..schemas.hospital import HospitalIn

router = APIRouter()

@router.get('/', response_model=list)
def list_hospitals():
    db = SessionLocal()
    rows = db.query(Hospital).all()
    db.close()
    return [{'id': r.id, 'name': r.name, 'lat': r.lat, 'lng': r.lng} for r in rows]

@router.post('/', response_model=dict)
def create_hospital(payload: HospitalIn):
    db = SessionLocal()
    h = Hospital(name=payload.name, lat=payload.lat, lng=payload.lng)
    db.add(h); db.commit(); db.refresh(h); db.close()
    return {'id': h.id, 'name': h.name, 'lat': h.lat, 'lng': h.lng}
