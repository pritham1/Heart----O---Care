from fastapi import APIRouter
from ..database import SessionLocal
from ..models.symptom import Symptom
from ..schemas.symptom import SymptomIn

router = APIRouter()

@router.post('/', response_model=dict)
def create_symptom(payload: SymptomIn):
    db = SessionLocal()
    s = Symptom(name=payload.name, severity=payload.severity)
    db.add(s); db.commit(); db.refresh(s); db.close()
    return {'id': s.id, 'name': s.name, 'severity': s.severity}
