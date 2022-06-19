import React from 'react';

import styles from './style.module.css';

function SummeryItem({ index, title, date, amount }) {
  return (
    <div className={styles.container} index={index}>
      <div>
        <p>{title}</p>
        <p>{date}</p>
      </div>
      <div>
        <p>{amount} TL</p>
      </div>
    </div>
  );
}

export default SummeryItem;
