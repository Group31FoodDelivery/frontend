import React from 'react'
import styles from './Restaurants.module.css'

export default function Restaurants(props) {
  return (
     
    <div className = {styles.restaurants}>
      <div><img className = {styles.photo} src = {`/images/${props.image}`}></img>
      </div>
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
      
      
