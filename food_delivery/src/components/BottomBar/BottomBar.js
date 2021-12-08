import React from 'react'
import styles from './BottomBar.module.css'

export default function BottomBar() {
    return (
        <div>
        <div className={styles.bottomEmpty}></div>
       <div className = {styles.bottomBar}>
            
            <div className = {styles.contactInfo}>
            <p>  Contact us!!!</p>
            <span> YammyGo@email.com</span>
            </div>
            <div className ={styles.socialMedia}>
            <button className={styles.media}>F</button>
            <button className={styles.media}>In</button>
            <button  className={styles.media}>Tw</button>
            </div>
        </div>
        </div>
    )
}
