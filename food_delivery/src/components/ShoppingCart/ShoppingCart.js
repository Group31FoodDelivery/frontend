import React from 'react'
import styles from './ShoppingCart.module.css'
import ShoppingCartItems from './ShoppingCartItems';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import data from './Orders2.json'

class ShoppingCart extends React.Component {

    render () {
        const orders = data;
        return (
            <div>
            <div className = {styles.title}><h1>Shopping cart</h1></div>
            <div className = {styles.container}>                                       
            <div className = {styles.topBar}>
            Your orders
            </div>
            <div className={styles.column}>
                <div>                                          
                {orders.map((order) => <ShoppingCartItems key={order.id}{...order}/>)}   {/*Creates shopping cart items*/}
                </div>
               <div style={{marginTop: "50px", fontSize: "18px"}}>Total</div>
               <div style={{marginBottom: "25px", fontSize: "24px", fontWeight: "500"}}>50.00€</div>
               Delivery location
               <input placeholder = "Street, apartment, postal code, city" className = {styles.deliveryLocation}></input>
               <Link to="/payment" style={{textDecoration: 'none'}}><div className = {styles.checkout}>Checkout</div></Link>  {/*Checkout 'button' to the payment page*/}
            </div>
            </div>
            </div>
        );
    }
    
}

export default ShoppingCart;