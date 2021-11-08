import React from 'react'
import styles from './FrontPage.module.css'
import restaurants from '../Restaurants/Restaurants'
import data from '../components/restaurantsMenu.json'

export default function FrontPage(props) {
    return (
        <div>
           {data.restaurants.map(restaurants => <Restaurants key={restaurants.id} data = {restaurants}/>)}
        </div>

        
    )
}

