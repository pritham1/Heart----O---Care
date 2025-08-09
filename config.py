from pydantic import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Heart O Care"
    DATABASE_URL: str = "sqlite:///./heartocare.db"
    SECRET_KEY: str = "change_this_in_prod"
    RESET_SECRET: str = "change_this_reset_secret"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    SMTP_HOST: str = ""
    SMTP_PORT: int = 0
    SMTP_USER: str = ""
    SMTP_PASS: str = ""

settings = Settings()
