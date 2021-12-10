import React from 'react'
import styles from './ShoppingCart.module.css'
import ShoppingCartItems from './ShoppingCartItems';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import{ connect } from 'react-redux';
import PaymentPage from '../PaymentPage/PaymentPage';
import shopReducer from '../../redux/Shopping/shopping-reducer';
import { useEffect } from 'react';

//option to choose customer's own address from profile info ?

function ShoppingCart(props) {

    const {cart} = props;
    const {token} = props;

    const [deliveryAddress, setDeliveryAddress] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        
        let price = 0;
        cart.forEach(menuItem => {

            price += menuItem.amount * menuItem.Price;
            
        });

        setTotalPrice(price);
    }, [cart, totalPrice, setTotalPrice])


const handleChange = (event) =>
    {
        setDeliveryAddress(event.target.value);  //updates the delivery address
        console.log(deliveryAddress);        
    }

    return (
            <div>
            <div className = {styles.title}><span>Shopping cart</span></div>
            <div className = {styles.mainContainer}>
            <div className = {styles.container}>                                       
            <div className = {styles.topBar}>
            Your orders
            </div>
            <div className={styles.column}>
                <div>
            {cart.length == 0 &&
                <h2>
                Your shopping cart is empty!
                </h2>
            }
                </div>
                <div>                                          
                {cart.map((order) => <ShoppingCartItems key={order.itemId}{...order}/>)}   {/*Creates shopping cart items*/}
                </div>
                <div style={{marginTop: "100px", fontSize: "18px"}}></div>
                <div style={{marginBottom: "25px", fontSize: "24px", fontWeight: "500"}}>{totalPrice}€</div>
            {cart.length > 0 &&
                <div> 
                 <div style = {{marginLeft: '100px'}}> Delivery location </div>
                <input placeholder = "Street, apartment, postal code, city" className = {styles.deliveryLocation} value = {deliveryAddress} onChange = {handleChange}></input>
                </div>
            }   
            </div>
            </div>
            <PaymentPage cart = {cart} price = {totalPrice} address = {deliveryAddress} token = {token}/>
            </div>
            </div>
    )
}

  
const mapStateToProps = state => { //sends cart state from Redux to props

    return{
        
        cart: state.shop.cart
    }

}

export default connect(mapStateToProps)(ShoppingCart);