from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

app = FastAPI(title="LANA APP API", description="API CRUD de transacciones", version="1.0")

transacciones = []
contador_id = 1

class TransaccionBase(BaseModel):
    tipo: str  
    monto: float
    categoria: str
    descripcion: Optional[str] = None
    fecha: Optional[datetime] = datetime.utcnow()

class TransaccionCreate(TransaccionBase):
    pass

class Transaccion(TransaccionBase):
    id: int


@app.post("/transactions", response_model=Transaccion)
def crear_transaccion(transaccion: TransaccionCreate):
    global contador_id
    nueva = Transaccion(id=contador_id, **transaccion.dict())
    transacciones.append(nueva)
    contador_id += 1
    return nueva

@app.get("/transactions", response_model=List[Transaccion])
def listar_transacciones():
    return transacciones

@app.get("/transactions/{id}", response_model=Transaccion)
def obtener_transaccion(id: int):
    for t in transacciones:
        if t.id == id:
            return t
    raise HTTPException(status_code=404, detail="Transacción no encontrada")

@app.put("/transactions/{id}", response_model=Transaccion)
def actualizar_transaccion(id: int, actualizada: TransaccionCreate):
    for i, t in enumerate(transacciones):
        if t.id == id:
            transacciones[i] = Transaccion(id=id, **actualizada.dict())
            return transacciones[i]
    raise HTTPException(status_code=404, detail="Transacción no encontrada")

@app.delete("/transactions/{id}")
def eliminar_transaccion(id: int):
    for i, t in enumerate(transacciones):
        if t.id == id:
            transacciones.pop(i)
            return {"mensaje": "Transacción eliminada"}
    raise HTTPException(status_code=404, detail="Transacción no encontrada")
