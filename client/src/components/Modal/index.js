import React, { useState } from 'react';
import axios from 'axios';
import styles from './style.module.css';

function Modal({ open, onClose, category, set }) {
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
          <button className={styles.closeButton} onClick={onClose}>
            x
          </button>
        </div>
        <div>
          <h1>modal</h1>
          <input
            name="name"
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder={category === 'income' ? 'Gelir Adı' : 'Gider Adı'}
          />
          <input
            onChange={e => setForm({ ...form, amount: e.target.value })}
            type="number"
            name="amount"
            placeholder="Tutar"
          />
          <button onClick={addItemToAPI}>Ekle</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
