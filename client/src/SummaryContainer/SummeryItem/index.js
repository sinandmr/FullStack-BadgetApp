import React from 'react'

import styles from './style.module.css'

function SummeryItem() {
    return (
        <div className={styles.container}>
            <div>
                <p>Item title</p>
                <p>16.06.2022</p>
            </div>
            <div>
                <p>5445 TL</p>
            </div>
        </div>
    )
}

export default SummeryItem