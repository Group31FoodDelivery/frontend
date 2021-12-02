import React from 'react'
import styles from './ShoppingCartItems.module.css'
import img from './images/food.jpg'
import minus from'./images/minus.png'
import plus from'./images/plus.png'
import { render } from '@testing-library/react'
import {connect}from 'react-redux';
import { removeFromCart } from '../../redux/Shopping/shopping-actions';
import {adjustQty} from '../../redux/Shopping/shopping-actions';


 function ShoppingCartItems(props) {

    const { removeFromCart} = props;
    const {adjustQty} = props;
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
                <button className = {styles.removeButton} onClick = {() => removeFromCart(props.itemId)}>X</button>                      {/*Remove item button*/}
            </div>
            <div className = {styles.itemsDown}>
                <div className = {styles.price}>{props.Price}€</div>            {/*Price*/}
                <div><img className = {styles.buttonMinus} src = {minus} onClick ={() => adjustQty(props.itemId,2)}>
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