import React from 'react';
import axios from 'axios';
import styles from './style.module.css';

function SummeryItem({ id, index, title, date, amount, set, setTotal }) {
  const deleteRequest = e => {
    e.preventDefault();
    axios.delete(`https://badget-backend.herokuapp.com/${id}`).then(data => {
      const { status } = data.data;
      if (status !== 'success') return;
      set(a => {
        const deletedItem = a.find(item => item?._id === id);
        const itemIndex = a.indexOf(deletedItem);
        a.splice([itemIndex], 1);

        // Total Balance

        setTotal(total => {
          const { income, expense } = total;
          return deletedItem.category === 'income'
            ? {
                ...total,
                income: income - deletedItem.amount,
              }
            : {
                ...total,
                expense: expense + deletedItem.amount,
              };
        });

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
