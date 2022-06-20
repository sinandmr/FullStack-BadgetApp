import React from 'react';
import styles from './style.module.css';

function BalanceCard({ total, setTotal }) {
  const { income, expense } = total;
  return (
    <div className={styles.container}>
      <p className={styles.title}>Total Balance</p>
      <p className={styles.title}>{income + expense} TL</p>
      <div className={styles.summary}>
        <div>
          <p className={styles.priceTitle}>Income</p>
          <p className={styles.price}>{income} TL</p>
        </div>
        <div>
          <p className={styles.priceTitle}>Expenses</p>
          <p className={styles.price}>{expense} TL</p>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
