import React from 'react';
import styles from './MenuItems.module.css'

export default function MenuPage(props) {
//   const menuData = map.retaurants((restaurants))  
    return (
        <div className={styles.container}>
            <div><img className = {styles.image}  src = {`./images/${props.image}`} alt=""></img></div>
      <div className ={styles.name}>{props.name}</div>
      <div className={styles.description}>{props.description}
      </div>
      <div className={styles.bottom}>
      <div className={styles.price}> {props.price} €</div>
      <button className={styles.card}>+</button>
      </div>

        </div>
    )}