import React from 'react'
import styles from './Restaurants.module.css'

/*export default function Restaurants(props) {
   return (
        <div className = {styles.Restaurants}>
        <div><img className = {styles.Photo} src = {`/images/${props.image}`}></img></div>
        <div>
        {props.name}
        </div>
        <div>
        {props.description}
        </div>
        <div>
        price
        </div>
        <div>
        operating hours
        </div>
        </div>
    )*/

    const Restaurant = props => {

        const{name, description} = props.data
      
      
      
      
      return(
        <div> {name}{description}
        </div>
      );
      }
      
       

