import React from 'react';
import styles from './Header.module.css';
import HeaderButton from '../HeaderButton/HeaderButton';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FrontPage from '../FrontPage/FrontPage';
import SignIn from '../SignIn/Sign-In'
import { connect } from 'react-redux';
import { useEffect } from 'react';

function Header(props) {

    const {shoppingcart} = props;
    const [cartCounter,setCartCounter] = React.useState(0)

    const logout = () => {
        props.logout();
    } 

    const register = () => {
        props.register();
    }

    const cart = () => {
        props.cart();
    }

    const restaurant = () => {
        props.restaurant();
    }
    

    const LoginLogoutButton = () => {
        if(props.token) {
            return (
                <div onClick={props.logout} style={{cursor: 'pointer', marginRight: '30px'}}>Log out</div>
            )
        } else {
            return (
                <Link to="/login" style={{textDecoration: 'none'}}><div className={styles.text}>
                    <img src = '/images/user.png' className = {styles.icon}/>Sign in</div></Link>
            )
        }
    }
    
    const RegisterButton = () => {

        if(props.token) {
            return (
                <div onClick={props.register} style={{cursor: 'pointer', marginRight: '30px'}}>Profile? </div>
            )
        } else {
            return (
                <Link to="/register" style={{textDecoration: 'none'}}><div className={styles.text}>
                <img src = '/images/register.png' className = {styles.icon}/>Register</div></Link>
            )
        

    }
    }

    const CartButton = () => {
        return(
        <Link to="/shoppingcart" className = {styles.buttonContainer}>
            <button className = {styles.shoppingcartButton}>
            <img className = {styles.shoppingIcon} src = "images/Cart.png"></img>
            <div style = {{fontSize: '16px'}}>
                {cartCounter} items
             </div>
            </button></Link>
            )

    }
    const CreateRestaurant = () => {
        if(props.token) {
            
           
            return(
            <Link to="/createrestaurant" style={{textDecoration: 'none'}}><div className={styles.text}>
            <img src = '/images/register.png' className = {styles.icon}/>Luo ravintola</div></Link>
            )

        } else {
            return (
                "ei tokenia"
            )
        }
    }


    useEffect(() => {
    
       let count = 0;
       shoppingcart.forEach(menuItem => {

       count += menuItem.amount;
           
       });
       setCartCounter(count);
    }, [shoppingcart, cartCounter])


    return (
        <div className={styles.Header}>

        <Link to="/" style={{textDecoration: 'none'}}><div style={{marginRight: '300px', marginLeft: '20px', color: 'white'}}>YammyGo</div></Link>
        <input type="text" placeholder="Search restaurants..." className={styles.searchBar} onChange={props.onSearchChange} value={props.itemSearchString}/>
        <button className={styles.searchButton}> Search </button>
        <LoginLogoutButton/>
        <RegisterButton/>
        <CreateRestaurant/>
        <CartButton/>         
        
       {/*<Link to="/orders" style={{textDecoration: 'none',backgroundColor: '#cc2255',textAlign: 'center',
            fontSize: '16px', height: '100%',width: '15%', marginLeft: 'auto'}}>
            <button className={styles.button}>Orders</button></Link>*/}         
       
    </div>
    
    )
}
        
const mapStateToProps = state => {
    return{
    shoppingcart: state.shop.cart
    };
}
export default connect(mapStateToProps)(Header);
