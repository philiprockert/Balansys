# configuracion de servidor con fast api, sqlalchemy para mysql
# y jwt para autenticacion
# Autor: Felipe Rodriguez Sarmiento


from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from pydantic import BaseModel
from jose import JWTError, jwt
from passlib.context import CryptContext
from typing import List

import models
import schemas

SECRET_KEY = "f4e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Configuracion de base de datos
SQLALCHEMY_DATABASE_URL = "mysql://root:1234@localhost:3306/crmbsys"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
models.Base.metadata.create_all(bind=engine)

# Configuracion de seguridad
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()

# funcion para obtener la base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# crear cliente en tabla que tiene el nombre de la empresa, el id y un campo tipo json con la informacion del cliente sin esquema
@app.post("/clients/", response_model=schemas.Client)
def create_client(client: schemas.Client, db: Session = Depends(get_db)):
    return crud.create_client(db=db, client=client)


# correr el servidor
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)

# para correr el server se debe ejecutar el comando uvicorn server:app --reload
# en la terminal