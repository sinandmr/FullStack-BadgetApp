import React, { useState } from 'react';
import axios from 'axios';
import styles from './style.module.css';

function Modal({ open, onClose, category, set, setTotal }) {
  const [form, setForm] = useState({
    name: '',
    amount: '',
    category,
  });
  const addItemToAPI = e => {
    e.preventDefault();
    axios
      .post('https://badget-backend.herokuapp.com/', form)
      .then(response => {
        const { status, data } = response.data;
        if (status !== 'success') return;
        set(current => [...current, data]);
        // Total Balance
        setTotal(total => {
          const { income, expense } = total;
          return data.category === 'income'
            ? {
                ...total,
                income: income + data.amount,
              }
            : {
                ...total,
                expense: expense + data.amount,
              };
        });
        onClose();
      })
      .catch(error => {
        console.log(error);
      });
  };
  if (!open) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.closeContainer}>
          <p className={styles.modalTitle}>Ekle</p>
          <button className={styles.closeButton} onClick={onClose}>
            x
          </button>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputLabel}
            name="name"
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder={category === 'income' ? 'Gelir Adı' : 'Gider Adı'}
          />
          <input
            className={styles.inputLabel}
            onChange={e => setForm({ ...form, amount: e.target.value })}
            type="number"
            name="amount"
            placeholder="Tutar"
          />
          <button className={styles.submitButton} onClick={addItemToAPI}>
            Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
