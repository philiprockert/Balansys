from pydantic import BaseModel
from typing import Optional

class Client(BaseModel):
    id: Optional[int] = None
    enterprise: str
    info: dict

    class Config:
        orm_mode = True
