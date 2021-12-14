import React from 'react';
import styles from './Header.module.css';
import HeaderButton from '../HeaderButton/HeaderButton';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FrontPage from '../FrontPage/FrontPage';
import SignIn from '../SignIn/Sign-In'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import jwt from 'jwt-decode';

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
                <div onClick={props.logout} style={{cursor: 'pointer'}}><img src = '/images/user.png' className = {styles.icon}/>Log out</div>
            )
        } else {
            return (
                <Link to="/login" style={{textDecoration: 'none'}}><div className={styles.text}>
                    <img src = '/images/user.png' className = {styles.icon}/> Sign in</div></Link>
            )
        }
    }


    const RegisterButton = () => {
        if(props.token) {
            const user = jwt(props.token);
            if(user.hasOwnProperty("manager")) {
                return (
                    <Link to="/createmenu" style={{textDecoration: 'none'}}>
                    <div onClick={props.register} className={styles.text} style={{cursor: 'pointer', marginRight: '30px'}}>
                    <img src = '/images/create.png' className = {styles.icon}/>Add menu items </div>
                    </Link>
                )
            } 
            else if(user.hasOwnProperty("customer")){
                return(
                <Link to="/orders" style={{textDecoration: 'none'}}><div className={styles.text}>Order history</div></Link>
                )
            }        
              else {
                return(null)
            }
        } else {
            return (
                <Link to="/register" style={{textDecoration: 'none'}}><div className={styles.text}>
                <img src = '/images/register.png' className = {styles.icon}/>Register</div></Link>
            )
        

    }
    }

//

const CartButton = () => {
    if(props.token) {
        const user = jwt(props.token);
        if(user.hasOwnProperty("customer")) {
            return (
                <Link to="/shoppingcart" style={{ textDecoration: 'none' }}>
                <button className = {styles.shoppingcartButton}>
                <img className = {styles.shoppingIcon} src = "images/cart.png"></img>
                <div style = {{fontSize: '16px'}}>
                    {cartCounter} items
                 </div>
                </button></Link>
            )
        } else if (user.hasOwnProperty("manager")){

            return(
            <Link to="/restaurantorders" style={{ textDecoration: 'none' }}>
                <button className = {styles.shoppingcartButton}>
                <img className = {styles.orderIcon} src = "images/orders.png"></img>
                <div style = {{fontSize: '16px'}}>
                    Orders
                 </div>
                </button></Link>   
                )         
        }
        else{
            return(null)
        }
    } else {
        return (
           <div>Not logged in</div>
        )
    }
}



   /* const CartButton = () => {
        return(
        <Link to="/shoppingcart" >
            <button className = {styles.shoppingcartButton}>
            <img className = {styles.shoppingIcon} src = "images/cart.png"></img>
            <div style = {{fontSize: '16px'}}>
                {cartCounter} items
             </div>
            </button></Link>
            )

    }*/

    const CreateRestaurant = () => {

        if(props.token) {
            const user = jwt(props.token);
            if(user.hasOwnProperty("manager")) {
           
            return(
            <Link to="/createrestaurant" style={{textDecoration: 'none'}}><div className={styles.text}>
            <img src = '/images/register.png' className = {styles.icon}/>Create a restaurant</div></Link>
            )
            } else {
                return null
            }

        } else {
            return (
                ""
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

        <Link to="/" style={{textDecoration: 'none'}}><div className={styles.logo} style={{}}>YammyGo</div></Link>
        <div className={styles.search}>
        <input type="text" placeholder="Search restaurants..." className={styles.searchBar} onChange={props.onSearchChange} value={props.itemSearchString}/>
        <button className={styles.searchButton}> Search </button>
        </div>
        <div className={styles.login}>
        <LoginLogoutButton/>
        <CreateRestaurant/>
        <RegisterButton/>
        
    </div>

        <div className = {styles.buttonContainer}>
        <CartButton/>  
        </div>       
        
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
