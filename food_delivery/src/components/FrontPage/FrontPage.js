import React from 'react'
import styles from './FrontPage.module.css'
import Restaurants from '../Restaurants/Restaurants'
import ManagerRestaurants from '../ManagerRestaurants/ManagerRestaurants'

export default function FrontPage(props) {
    return (

    <div>
         <div className={styles.title}>
        <h1>Restaurants</h1>
        </div>
        <div className = {styles.frontPage}>
           {props.restaurants.map(restaurants => <Restaurants key={restaurants.id} {...restaurants}/>)} {/*go through the json array and send ONE new array per component*/}
        </div>
        <div className = {styles.frontPage}>
           {props.restaurants.map(restaurants => <ManagerRestaurants key={restaurants.id} {...restaurants}/>)} {/*if account is a manager render manager view (somehow)*/}
        </div>
</div>
        
    )
}

