import React from 'react'
import styles from './ShoppingCart.module.css'
import ShoppingCartItems from './ShoppingCartItems';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import data from './Orders2.json'
import PaymentPage from '../PaymentPage/PaymentPage';

class ShoppingCart extends React.Component {

    constructor(props)
 {
  super(props)
  this.state =  { 
    deliveryString: "",             
 }

 }

    //not supposed to be anything serious, just a test function
    //quantity needs to be taken into account
    countPrice = () => 
    {
        let total = 0;
        const prices = data.map((p) => p.price);
        for(let i=0; i<prices.length; i++){
            total += prices[i];
            console.log(total);      
        }

        return total.toFixed(2);

    }

    handleChange = (event) =>
    {
        this.setState({deliveryString: event.target.value});
        console.log(this.state.deliveryString);        
    }

    render () {
        this.countPrice();
        const orders = data;
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
                {orders.map((order) => <ShoppingCartItems key={order.id}{...order}/>)}   {/*Creates shopping cart items*/}
                </div>
               <div style={{marginTop: "50px", fontSize: "18px"}}></div>
               <div style={{marginBottom: "25px", fontSize: "24px", fontWeight: "500"}}>{this.countPrice()}€</div>
               Delivery location
               <input placeholder = "Street, apartment, postal code, city" className = {styles.deliveryLocation} value = {this.setState.deliveryString} onChange = {this.handleChange}></input>
               {/* <Link to="/payment" style={{textDecoration: 'none'}}><div className = {styles.checkout} onClick = {this.handleChange}>Checkout</div></Link>  Checkout 'button' to the payment page */}
            </div>
            </div>
            <PaymentPage/>
            </div>
            </div>
        );
    }
    
}

export default ShoppingCart;