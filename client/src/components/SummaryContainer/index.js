import React from 'react'
import styles from './style.module.css'

import SummeryItem from './SummeryItem'

function SummaryContainer({ title }) {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <SummeryItem />
        </div>
    )
}

export default SummaryContainer