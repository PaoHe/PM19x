from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class TransactionBase(BaseModel):
    tipo: str
    monto: float
    categoria: str
    descripcion: Optional[str] = None

class TransactionCreate(TransactionBase):
    pass

class Transaction(TransactionBase):
    id: int
    fecha: datetime

    class Config:
        orm_mode = True
