import React from 'react';
import styles from './MenuItems.module.css'

export default function MenuPage(props) {
    return (
        <div className={styles.container}>
            <div><img className = {styles.image}  src = "./images/hugo.jpeg"></img></div>
      <div className ={styles.name}>VEGGIE MENU</div>
      <div className={styles.description}>Creamy soup of horn chanterelles with domestic pear,Grilled broccoli, tomato and parmesan
      </div>
      <div className={styles.price}> $78</div>

        </div>
    )}