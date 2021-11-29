import React from 'react'
import styles from './ManagerFrontPage.module.css'
import ManagerRestaurants from '../ManagerRestaurants/ManagerRestaurants'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function FrontPage(props) {
    return (

    <div>
         <div className={styles.title}>
        <h1>Your restaurants</h1>
        <Link to="/createrestaurant" style = {{textDecoration: 'none'}}><button className = {styles.text} style = {{marginLeft: '260px'}}>Create restaurant</button></Link>
        <Link to="/createmenu" style={{textDecoration: 'none'}}><button className = {styles.text}>Create menu</button></Link>
        <Link to="/restaurantorders" style={{textDecoration: 'none'}}><button className = {styles.text}>Orders</button></Link>
        </div>
        <div className = {styles.frontPage}>
           {props.restaurants.map(restaurants => <ManagerRestaurants key={restaurants.id} {...restaurants}/>)}
        </div>
</div>
        
    )
}

