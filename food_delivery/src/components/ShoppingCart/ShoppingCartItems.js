import React from 'react'
import styles from './ShoppingCartItems.module.css'
import img from './images/food.jpg'

 /*UI still needs:

 -add and remove button
 -checkout button
 
 */

export default function ShoppingCartItems() {
    return (
        <div className = {styles.shoppingCartItems}>
            <div className = {styles.photoArea}>
            <div><img className = {styles.photo} src = {img}
             ></img></div>
            </div>
            <div className = {styles.infoArea}>
            <div className = {styles.itemsUp}>
                <div style = {{marginRight: "170px"}}>A plate of food</div>     {/*Name of the order*/}
                <div style = {{color: '#CC2255'}}>X</div>                       {/*Remove item button*/}
            </div>
            <div className = {styles.itemsDown}>
                <div className = {styles.price}>10.00€</div>                     {/*Price*/}
                <div className = {styles.addMore}>1</div>                        {/*how many*/}
            </div>
            </div>
            <div></div>
       
        </div>
    )
}
 