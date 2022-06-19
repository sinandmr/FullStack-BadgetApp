import React from 'react';

import styles from './style.module.css';

function SummeryItem({ index, title, date, amount }) {
  return (
    <div className={styles.container} index={index}>
      <div>
        <p className={styles.title}>{title}</p>
        <p>{date}</p>
      </div>
      <div>
        <p>{amount} TL</p>
      </div>
      <div className={styles.btnContainer}>
        <button type="submit" className={styles.deleteButton}>x</button>
      </div>
    </div>
  );
}

export default SummeryItem;
