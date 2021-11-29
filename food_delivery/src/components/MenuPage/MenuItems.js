import React from 'react';
import Restaurants from '../Restaurants/Restaurants';
import styles from './MenuItems.module.css'

export default function MenuPage(props) {
//   const menuData = map.retaurants((restaurants))

    return (
        <div className={styles.container}>
            <div><img className = {styles.image}  src = {`./images/${props.image}`} alt=""></img></div>
      <div className ={styles.name}>{props.Name}</div>
      <div className={styles.description}>{props.Description}
      </div>
      <div className={styles.bottom}>
      <div className={styles.price}> {props.Price} €</div>
      <button className={styles.card}>+</button>
      </div>

        </div>
    )}