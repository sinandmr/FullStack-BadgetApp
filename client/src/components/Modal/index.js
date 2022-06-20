import React, { useState } from 'react';
import styles from './style.module.css';

function Modal({ open, onClose }) {
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
        </div>
      </div>
    </div>
  );
}

export default Modal;
