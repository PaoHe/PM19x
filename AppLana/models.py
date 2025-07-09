from sqlalchemy import Column, Integer, String, Float, DateTime
from database import Base
from datetime import datetime

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    tipo = Column(String, index=True)  # "ingreso" o "gasto"
    monto = Column(Float)
    categoria = Column(String)
    descripcion = Column(String)
    fecha = Column(DateTime, default=datetime.utcnow)
