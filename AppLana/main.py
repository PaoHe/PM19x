from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models, schemas, crud

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="LANA API", description="API CRUD con base de datos", version="1.0")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/transactions", response_model=schemas.Transaction)
def crear_transaccion(transaccion: schemas.TransactionCreate, db: Session = Depends(get_db)):
    return crud.create_transaction(db, transaccion)

@app.get("/transactions", response_model=list[schemas.Transaction])
def listar_transacciones(db: Session = Depends(get_db)):
    return crud.get_transactions(db)

@app.get("/transactions/{transaction_id}", response_model=schemas.Transaction)
def obtener_transaccion(transaction_id: int, db: Session = Depends(get_db)):
    transaccion = crud.get_transaction(db, transaction_id)
    if not transaccion:
        raise HTTPException(status_code=404, detail="Transacción no encontrada")
    return transaccion

@app.put("/transactions/{transaction_id}", response_model=schemas.Transaction)
def actualizar_transaccion(transaction_id: int, data: schemas.TransactionCreate, db: Session = Depends(get_db)):
    actualizada = crud.update_transaction(db, transaction_id, data)
    if not actualizada:
        raise HTTPException(status_code=404, detail="Transacción no encontrada")
    return actualizada

@app.delete("/transactions/{transaction_id}")
def eliminar_transaccion(transaction_id: int, db: Session = Depends(get_db)):
    eliminada = crud.delete_transaction(db, transaction_id)
    if not eliminada:
        raise HTTPException(status_code=404, detail="Transacción no encontrada")
    return {"mensaje": "Transacción eliminada"}
