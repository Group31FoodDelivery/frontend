import React from 'react'
import styles from './FrontPage.module.css'
import Restaurants from '../Restaurants/Restaurants'

export default function FrontPage(props) {
    return (
        <div className = {styles.FrontPage}>
           {props.restaurants.map(restaurants => <Restaurants key={restaurants.id} {...restaurants}/>)} {/*go through the json array and send ONE new array per component*/}
        </div>

        
    )
}

