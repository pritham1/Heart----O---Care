from sqlalchemy.orm import Session
from ..models.user import User
from ..core.security import get_password_hash, verify_password

def create_user(db: Session, username: str, email: str, password: str, role: str = 'user'):
    user = User(username=username, email=email, hashed_password=get_password_hash(password), role=role)
    db.add(user); db.commit(); db.refresh(user); return user

def authenticate(db: Session, username: str, password: str):
    user = db.query(User).filter(User.username == username).first()
    if not user: return None
    if not verify_password(password, user.hashed_password): return None
    return user
