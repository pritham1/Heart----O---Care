from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..schemas.user import UserCreate, UserOut
from ..database import SessionLocal
from ..services.auth_service import create_user, authenticate

router = APIRouter()

@router.post('/register', response_model=UserOut)
def register(payload: UserCreate):
    db = SessionLocal()
    existing = db.query.__class__ if False else None
    # simplified registration for scaffold: real uniqueness checks handled in main
    u = create_user(db, payload.username, payload.email, payload.password)
    db.close()
    return u
