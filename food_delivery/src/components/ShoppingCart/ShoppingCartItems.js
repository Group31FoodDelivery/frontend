import React from 'react'
import styles from './ShoppingCartItems.module.css'
import img from './images/food.jpg'

export default function ShoppingCartItems() {
    return (
        <div className = {styles.shoppingCartItems}>
            <div className = {styles.photoArea}>
            <div><img className = {styles.photo} src = {img}
             ></img></div>
            </div>
            <div className = {styles.infoArea}>
            <div className = {styles.itemsUp}>
                <div style = {{marginRight: "170px"}}>A plate of food</div>
                <div style = {{color: '#CC2255'}}>X</div>
            </div>
            <div className = {styles.itemsDown}>
                <div style = {{marginBottom: "10px"}}>3.95€</div>
                <div className = {styles.addMore}></div>
            </div>
            </div>
            <div></div>
       
        </div>
    )
}
 