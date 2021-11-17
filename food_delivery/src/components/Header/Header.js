import React from 'react';
import styles from './Header.module.css';
import HeaderButton from '../HeaderButton/HeaderButton';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FrontPage from '../FrontPage/FrontPage';
import SignIn from '../SignIn/Sign-In'




class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render ()
    {
        return (
            <div className={styles.Header}>

            <Link to="/" style={{textDecoration: 'none'}}><div style={{marginRight: '300px', marginLeft: '20px', color: 'white'}}>YammyGo</div></Link>
            <input type="text" placeholder="Search restaurants..." className={styles.searchBar} onChange={this.props.onSearchChange} value={this.props.itemSearchString}/>
            <button className={styles.searchButton}> Search </button>
            <Link to="/login" style={{textDecoration: 'none'}}><div style={{marginRight: '50px', color: 'white'}}>Log in</div></Link>
            <Link to="/register" style={{textDecoration: 'none'}}><div style={{marginRight: '50px', color: 'white'}}>Register</div></Link>
            <Link to="/shoppingcart" className = {styles.buttonContainer}>
            <button className = {styles.shoppingcartButton}>
            <img className = {styles.icon} src = "images/Cart.png"></img>
            <div style = {{fontSize: '16px'}}>
                Empty 
            </div>
            </button></Link>             
        </div>
        );
    }
        
}

export default Header;
