import React, { useState } from 'react';
import styles from './style.module.css';

import SummeryItem from './SummeryItem';
import Modal from '../Modal';

function SummaryContainer({ title, data, set, setTotal }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {data.map(item => (
        <span key={item.key}>
          <SummeryItem
            set={set}
            setTotal={setTotal}
            index={item.key}
            id={item._id}
            title={item.name}
            date={item.date}
            amount={item.amount}
          />
        </span>
      ))}
      <div className={styles.buttonContainer}>
        <button
          className={styles.addButton}
          onClick={() => setOpenModal(!openModal)}
        >
          +
        </button>
        <Modal
          open={openModal}
          setTotal={setTotal}
          onClose={() => setOpenModal(false)}
          category={title.toLowerCase()}
          set={set}
        />
      </div>
    </div>
  );
}

export default SummaryContainer;
