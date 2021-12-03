import React from 'react';
import styles from './Header.module.css';
import HeaderButton from '../HeaderButton/HeaderButton';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FrontPage from '../FrontPage/FrontPage';
import SignIn from '../SignIn/Sign-In'




class Header extends React.Component {
    constructor(props) {
        super(props);

        this.loginLogoutButton = this.loginLogoutButton.bind(this);
        this.registerButton = this.registerButton.bind(this);
        this.cartButton = this.cartButton.bind(this);
        this.createRestaurant = this.createRestaurant.bind(this);

    }

    logout() {
        this.props.logout();
    } 

    register() {
        this.props.register();
    }

    cart() {
        this.props.cart();
    }

    restaurant() {
        this.props.restaurant();
    }
    

    loginLogoutButton() {
        if(this.props.token) {
            return (
                <div onClick={this.props.logout} style={{cursor: 'pointer', marginRight: '30px'}}>Log out</div>
            )
        } else {
            return (
                <Link to="/login" style={{textDecoration: 'none'}}><div className={styles.text}>
                    <img src = '/images/user.png' className = {styles.icon}/>Sign in</div></Link>
            )
        }
    }
    
    registerButton() {

        if(this.props.token) {
            return (
                <div onClick={this.props.register} style={{cursor: 'pointer', marginRight: '30px'}}>Profile? </div>
            )
        } else {
            return (
                <Link to="/register" style={{textDecoration: 'none'}}><div className={styles.text}>
                <img src = '/images/register.png' className = {styles.icon}/>Register</div></Link>
            )
        

    }
    }

    cartButton() {
        return(
        <Link to="/shoppingcart" className = {styles.buttonContainer}>
            <button className = {styles.shoppingcartButton}>
            <img className = {styles.shoppingIcon} src = "images/Cart.png"></img>
            <div style = {{fontSize: '16px'}}>
                if Empty 
             </div>
            </button></Link>
            )

    }
    createRestaurant() {
        if(this.props.token) {
            
           
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

    render ()
    {
            return (
                <div className={styles.Header}>
                <Link to="/" style={{textDecoration: 'none'}}><div style={{marginRight: '300px', marginLeft: '20px', color: 'white'}}>YammyGo</div></Link>
                <input type="text" placeholder="Search restaurants..." className={styles.searchBar} onChange={this.props.onSearchChange} value={this.props.itemSearchString}/>
                <button className={styles.searchButton}> Search </button>
                <this.loginLogoutButton/>
                <this.registerButton/>
                <this.createRestaurant/>
                <this.cartButton/>
                
                
             
               {/*<Link to="/orders" style={{textDecoration: 'none',backgroundColor: '#cc2255',textAlign: 'center',
                    fontSize: '16px', height: '100%',width: '15%', marginLeft: 'auto'}}>
                    <button className={styles.button}>Orders</button></Link>*/}         
               
            </div>
            );
        }
    }

        

export default Header;
