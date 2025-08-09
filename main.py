from fastapi import FastAPI
from .database import Base, engine, SessionLocal
from .models import user as user_model, hospital as hospital_model
from .api import hospitals as hospitals_router, symptoms as symptoms_router, auth as auth_router
from .core import config
import os

Base.metadata.create_all(bind=engine)

app = FastAPI(title=config.settings.PROJECT_NAME)

@app.on_event('startup')
def seed():
    db = SessionLocal()
    if db.query(hospital_model.Hospital).count() == 0:
        sample = [ ('City Heart Clinic',28.64,77.23), ('Metro Cardiac Centre',28.62,77.21) ]
        for n,la,lo in sample:
            db.add(hospital_model.Hospital(name=n, lat=la, lng=lo))
        db.commit()
    # create admin if none
    if db.query(user_model.User).count() == 0:
        from .services.auth_service import create_user
        create_user(db, 'admin', 'admin@example.com', 'adminpass', role='admin')
    db.close()

app.include_router(hospitals_router.router, prefix='/api/hospitals', tags=['hospitals'])
app.include_router(symptoms_router.router, prefix='/api/symptoms', tags=['symptoms'])
app.include_router(auth_router.router, prefix='/api/auth', tags=['auth'])

@app.get('/api/health')
def health():
    return {'status':'ok'}

# Serve a simple index if needed
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
app.mount('/static', StaticFiles(directory=os.path.join(os.path.dirname(__file__), 'static')), name='static')

@app.get('/', include_in_schema=False)
def index():
    path = os.path.join(os.path.dirname(__file__), 'static', 'index.html')
    return FileResponse(path)
