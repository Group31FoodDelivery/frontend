import React from 'react'
import styles from './ShoppingCart.module.css'
import ShoppingCartItems from './ShoppingCartItems';

class ShoppingCart extends React.Component {
    render () {
        return (
            <div className = {styles.column}>                                       
            <div className = {styles.topBar}>
            Your orders
            </div>
            <div className={styles.container}>
                <div className={styles.shoppingCart}>                                  {/*Creates shopping cart items*/}
                    <div><ShoppingCartItems/></div>
                    <div><ShoppingCartItems/></div>
                    <div><ShoppingCartItems/></div>
                    <div><ShoppingCartItems/></div>
                    <div><ShoppingCartItems/></div>
                    <div><ShoppingCartItems/></div>
                    <div><ShoppingCartItems/></div>
                </div>
               <div style={{marginTop: "50px", fontSize: "18px"}}>Total</div>
               <div style={{marginBottom: "25px", fontSize: "20px", fontWeight: "500"}}>50.00€</div>
            </div>
            </div>
        );
    }
    
}

export default ShoppingCart;