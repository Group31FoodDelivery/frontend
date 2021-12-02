import React from 'react'
import styles from './ShoppingCartItems.module.css'
import img from './images/food.jpg'
import minus from'./images/minus.png'
import plus from'./images/plus.png'
import { render } from '@testing-library/react'

export default function ShoppingCartItems(props) {

    console.log("KARTTI ITEMEISSÄ: ");
    console.log(props);
    let [qnty, setQnty] = React.useState(1);

    const addItems = () => {  //setState doesn't immediately mutate, visual problem, 2 shows 1, 3 shows 2 etc.

        setQnty(qnty++);

    }

    const removeItems = () => { //also needs to know WHICH order to add/remove

        setQnty(qnty--);
        console.log(qnty);

    }

        return (
        <div className = {styles.shoppingCartItems}>
            <div className = {styles.photoArea}>
            <div><img className = {styles.photo} src = {img}                    
             ></img></div>                                                               {/*Picture of the order*/}
            </div>
            <div className = {styles.infoArea}>
            <div className = {styles.itemsUp}>
                <div className = {styles.orderName}>{props.Name}</div>                    {/*Name of the order*/}
                <div style = {{marginRight: '20px', marginLeft: '20px'}}></div>
                <button className = {styles.removeButton}>X</button>                      {/*Remove item button*/}
            </div>
            <div className = {styles.itemsDown}>
                <div className = {styles.price}>{props.Price}€</div>            {/*Price*/}
                <div><img className = {styles.buttonMinus} src = {minus} onClick = {removeItems}>
                    </img></div>                     
                <div className = {styles.addMore}>{props.amount}</div>                                {/*how many*/}
                <div><img className = {styles.buttonPlus} src = {plus} onClick = {addItems}>
                    </img></div> 
            </div>
            </div>
            <div></div>
       
        </div>
    )
}

