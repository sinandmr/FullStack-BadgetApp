import React from 'react';
import axios from 'axios';
import styles from './style.module.css';

function SummeryItem({ id, index, title, date, amount, set }) {
  const deleteRequest = e => {
    e.preventDefault();
    axios.delete(`https://badget-backend.herokuapp.com/${id}`).then(data => {
      const { status } = data.data;
      if (status !== 'success') return;
      set(a => {
        const deletedItem = a.find(item => item?._id === id);
        const itemIndex = a.indexOf(deletedItem);
        a.splice([itemIndex], 1);
        return [...a];
      });
    });
  };

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
        <button
          type="submit"
          onClick={deleteRequest}
          className={styles.deleteButton}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default SummeryItem;
