import React from 'react'
import styles from './FrontPage.module.css'
import Restaurants from '../Restaurants/Restaurants'
import ManagerRestaurants from '../ManagerRestaurants/ManagerRestaurants'

export default function FrontPage(props) {
    return (

    <div>
         <div className={styles.title}>
        Restaurants
        </div>
        <div className = {styles.frontPage}>
           {props.restaurantData.map(restaurants => <Restaurants key={restaurants.restaurantId} {...restaurants}/>)} {/*go through the json array and send ONE new array per component*/}
        </div> 
</div>
        
    )
}



