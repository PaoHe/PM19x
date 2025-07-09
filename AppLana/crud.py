from sqlalchemy.orm import Session
from models import Transaction
from schemas import TransactionCreate

def get_transactions(db: Session):
    return db.query(Transaction).all()

def get_transaction(db: Session, transaction_id: int):
    return db.query(Transaction).filter(Transaction.id == transaction_id).first()

def create_transaction(db: Session, transaction: TransactionCreate):
    db_transaction = Transaction(**transaction.dict())
    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction

def update_transaction(db: Session, transaction_id: int, data: TransactionCreate):
    transaction = get_transaction(db, transaction_id)
    if not transaction:
        return None
    for key, value in data.dict().items():
        setattr(transaction, key, value)
    db.commit()
    db.refresh(transaction)
    return transaction

def delete_transaction(db: Session, transaction_id: int):
    transaction = get_transaction(db, transaction_id)
    if not transaction:
        return None
    db.delete(transaction)
    db.commit()
    return transaction
