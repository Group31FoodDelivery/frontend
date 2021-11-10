import React from 'react'
import styles from './FrontPage.module.css'
import Restaurants from '../Restaurants/Restaurants'

export default function FrontPage(props) {
    return (

    <div>
         <div className={styles.title}>
             <div className={styles.text}>
        <h1>Restaurants</h1>
        </div>
        </div>
        <div className = {styles.frontPage}>
           {props.restaurants.map(restaurants => <Restaurants key={restaurants.id} {...restaurants}/>)} 
           {/*go through the json array and send ONE new array per component*/}
        </div>
</div>
        
    )
}
