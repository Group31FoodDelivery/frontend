import React from 'react'
import styles from './Restaurants.module.css'

export default function Restaurants(props) {
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
        {props.type}
        </div>
        <div>
        {props.open}
        </div>
        <div>
        {props.address}
        <div>
        {props.pricelevel}
        </div>
        </div>
      
    </div>
  )
}
      
      
