import React, { useState } from 'react';
import styles from './style.module.css';

import SummeryItem from './SummeryItem';
import Modal from '../Modal';

function SummaryContainer({ title, data }) {
  const [openModal, setOpenModal] = useState(false);
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
      <div className={styles.buttonContainer}>
        <button className={styles.addButton} onClick={() => setOpenModal(!openModal)}>+</button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
}

export default SummaryContainer;
