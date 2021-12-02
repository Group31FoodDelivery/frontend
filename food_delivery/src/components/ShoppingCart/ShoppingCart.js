import React from 'react'
import styles from './ShoppingCart.module.css'
import ShoppingCartItems from './ShoppingCartItems';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import data from './Orders2.json'
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
        setDeliveryAddress(event.target.value);
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
                {cart.map((order) => <ShoppingCartItems key={order.itemId}{...order}/>)}   {/*Creates shopping cart items*/}
                </div>
               <div style={{marginTop: "50px", fontSize: "18px"}}></div>
               <div style={{marginBottom: "25px", fontSize: "24px", fontWeight: "500"}}>{totalPrice}€</div>
               Delivery location
               <input placeholder = "Street, apartment, postal code, city" className = {styles.deliveryLocation} value = {deliveryAddress} onChange = {handleChange}></input>
               {/* <Link to="/payment" style={{textDecoration: 'none'}}><div className = {styles.checkout} onClick = {this.handleChange}>Checkout</div></Link>  Checkout 'button' to the payment page */}
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