# Heart O Care - Complete Monorepo

## Backend
cd backend
python -m venv venv
venv\Scripts\activate   (Windows) or source venv/bin/activate (mac/linux)
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

API health: http://127.0.0.1:8000/api/health
Frontend (optional): npm install && npm run dev in frontend/
