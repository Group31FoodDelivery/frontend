import React from 'react';
import styles from './Header.module.css';
import HeaderButton from '../HeaderButton/HeaderButton';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FrontPage from '../FrontPage/FrontPage';
import SignIn from '../SignIn/Sign-In'
import { connect } from 'react-redux';
import { useEffect } from 'react';

function Header(props) {

    const {cart} = props;
    const [cartCounter,setCartCounter] = React.useState(0)

    useEffect(() => {
    
       let count = 0;
       cart.forEach(menuItem => {

        count += menuItem.amount;
           
       });
       setCartCounter(count);
    }, [cart, cartCounter])

    return (
        <div className={styles.Header}>
        <Link to="/" style={{textDecoration: 'none'}}><div className={styles.logo} style={{}}>YammyGo</div></Link>
        <div className={styles.search}>
        <input type="text" placeholder="Search restaurants..." className={styles.searchBar} onChange={props.onSearchChange} value={props.itemSearchString}/>
        <button className={styles.searchButton}> Search </button>
        </div>
        <div className={styles.login}>
        <Link to="/login" style={{textDecoration: 'none'}}><div className={styles.text}>
            <img src = '/images/user.png' className = {styles.icon}/>Sign in</div></Link>
        <Link to="/register" style={{textDecoration: 'none'}}><div className={styles.text}>
        <img src = '/images/register.png' className = {styles.icon}/>Register</div></Link>
        </div>
        <div className = {styles.buttonContainer}>
        <Link to="/shoppingcart" >
        <button className = {styles.shoppingcartButton}>
        <img className = {styles.shoppingIcon} src = "images/cart.png"></img>
        <div style = {{fontSize: '16px', color: 'white'}}>
            {cartCounter} orders 
        </div>
        </button></Link>  
        </div>           
        
       {/*<Link to="/orders" style={{textDecoration: 'none',backgroundColor: '#cc2255',textAlign: 'center',
            fontSize: '16px', height: '100%',width: '15%', marginLeft: 'auto'}}>
            <button className={styles.button}>Orders</button></Link>*/}         
       
    </div>
    
    )
}


const mapStateToProps = state => {
    return{
    cart: state.shop.cart
    };
}
export default connect(mapStateToProps)(Header);
