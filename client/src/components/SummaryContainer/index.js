import React from 'react';
import styles from './style.module.css';

import SummeryItem from './SummeryItem';

function SummaryContainer({ title, data }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {data.map(item => (
        <SummeryItem
          index={item.key}
          title={item.name}
          date={item.date}
          amount={item.amount}
        />
      ))}
    </div>
  );
}

export default SummaryContainer;
