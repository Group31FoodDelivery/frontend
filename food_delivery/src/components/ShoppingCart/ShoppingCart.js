import React from 'react'
import styles from './ShoppingCart.module.css'
import ShoppingCartItems from './ShoppingCartItems';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import data from './orders2.json';
import { useState } from 'react';
import{ connect } from 'react-redux';
import PaymentPage from '../PaymentPage/PaymentPage';
import shopReducer from '../../redux/Shopping/shopping-reducer';
import { useEffect } from 'react';

function ShoppingCart({cart}) {

    const [deliveryAddress, setDeliveryAddress] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        let price = 0;
        let items = 0;
        cart.forEach(menuItem => {

            items += menuItem.amount;
            price += menuItem.amount * menuItem.Price;
            
        });

        setTotalPrice(price);
        setTotalItems(items);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])


const handleChange = (event) =>
    {
        setDeliveryAddress(event.target.value);  //is always one letter behind because of the way setState works, needs to be fixed
        console.log(deliveryAddress);        
    }

    return (
            <div>
            <div className = {styles.title}><h1>Shopping cart</h1></div>
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
            <PaymentPage/>
            </div>
            </div>
    )
}

  
const mapStateToProps = state => {

    return{
        
        cart: state.shop.cart
    }

}

export default connect(mapStateToProps)(ShoppingCart);