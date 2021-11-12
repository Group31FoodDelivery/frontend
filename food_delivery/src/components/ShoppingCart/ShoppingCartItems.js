import React from 'react'
import styles from './ShoppingCartItems.module.css'
import img from './images/food.jpg'
import minus from'./images/minus.png'
import plus from'./images/plus.png'


 /*UI still needs:

 -add and remove button
 
 */

export default function ShoppingCartItems() {
    return (
        <div className = {styles.shoppingCartItems}>
            <div className = {styles.photoArea}>
            <div><img className = {styles.photo} src = {img}                    
             ></img></div>                                                      {/*Picture of the order*/}
            </div>
            <div className = {styles.infoArea}>
            <div className = {styles.itemsUp}>
                <div style = {{marginRight: "170px"}}>A plate of food</div>     {/*Name of the order*/}
                <div style = {{color: '#CC2255'}}>X</div>                       {/*Remove item button*/}
            </div>
            <div className = {styles.itemsDown}>
                <div className = {styles.price}>10.00€</div>                    {/*Price*/}
                <div><img className = {styles.buttonMinus} src = {minus}>
                    </img></div>                     
                <div className = {styles.addMore}>1</div>                        {/*how many*/}
                <div><img className = {styles.buttonPlus} src = {plus}>
                    </img></div> 
            </div>
            </div>
            <div></div>
       
        </div>
    )
}
 