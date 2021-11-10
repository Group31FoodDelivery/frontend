import React from 'react';
import styles from './Restaurants.module.css';
import MenuPage from '../MenuPage/MenuPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Restaurants(props) {
  return (
     
    <div className = {styles.restaurants}>
      <Link to="/menupages" style={{textDecoration: 'none'}}><div><img className = {styles.photo} src = {`/images/${props.image}`}
      ></img>
      </div></Link>
      <div className ={styles.name}>
       {props.name} 
        </div>
        {/* <div className={styles.description}>
        {props.description}
        </div> */}
        
        <div className={styles.text}>
        <div>
        {props.type}
        </div>
        <div>
        {props.pricelevel}
        </div>
         <div>
        Open: {props.open}
        </div>
        {/* <div>
        {props.address}
        </div> */}
        </div>
        <div className={styles.rating}>
          {props.rating} 
        </div>
        
    
      </div>
      
    
  )
}
      
      
