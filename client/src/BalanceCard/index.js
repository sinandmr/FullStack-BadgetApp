import React from 'react'
import styles from './style.module.css'

function BalanceCard({ data }) {
    console.log(data.data);
    return (
        <div className={styles.container}>
            <p className={styles.title}>Total Balance</p>
            <p className={styles.title}>-370 TL</p>
            <div className={styles.summary}>
                <div>
                    <p className={styles.priceTitle}>Income</p>
                    <p className={styles.price}>-370 TL</p>
                </div>
                <div>
                    <p className={styles.priceTitle}>Expenses</p>
                    <p className={styles.price}>370tl</p>
                </div>
            </div>
        </div>
    )
}

export default BalanceCard