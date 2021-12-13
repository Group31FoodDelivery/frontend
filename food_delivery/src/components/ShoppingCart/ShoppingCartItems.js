import React from 'react'
import styles from './ShoppingCartItems.module.css'
import img from './images/food.jpg'
import minus from'./images/minus.png'
import plus from'./images/plus.png'
import { render } from '@testing-library/react'
import {connect}from 'react-redux';
import { useState } from 'react'
import { removeFromCart } from '../../redux/Shopping/shopping-actions';
import {adjustQty} from '../../redux/Shopping/shopping-actions';


 function ShoppingCartItems(props) {
     console.log(props);

    const { removeFromCart} = props;
    const {adjustQty} = props;

    let [qnty, setQnty] = useState(props.amount);

    const addItems = () => { 

        let newAmount = qnty + 1;
        setQnty(newAmount);
        console.log(qnty);
        adjustQty(props.itemId, newAmount)

    }

    const removeItems = () => { 

        if(qnty > 1){
        let newAmount = qnty -1;
        setQnty(newAmount);
        console.log(qnty);
        adjustQty(props.itemId, newAmount)
    }
    else{

    }
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
                <div className = {styles.orderName}>{props.ItemName}</div>                    {/*Name of the order*/}
                <div style = {{marginRight: '20px', marginLeft: '20px'}}></div>
                <button className = {styles.removeButton} onClick = {() => removeFromCart(props.itemId)}>X</button>                      {/*Remove item button*/}
            </div>
            <div className = {styles.itemsDown}>
                <div className = {styles.price}>{props.Price}€</div>            {/*Price*/}
                <div><img className = {styles.buttonMinus} src = {minus} onClick ={removeItems}>
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

const mapDispatchToProps = dispatch => {

    return{

        removeFromCart: (itemId) => dispatch(removeFromCart(itemId)), //sends the removeFromCart function from shopping-actions.js as a prop
        adjustQty : (itemId, value) => dispatch(adjustQty(itemId, value))                                                          //takes the itemId as a parameter, so the function knows which item to delete
    }
}

export default connect(null, mapDispatchToProps)(ShoppingCartItems)