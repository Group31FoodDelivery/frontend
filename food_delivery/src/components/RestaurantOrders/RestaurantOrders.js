import React from 'react';
import styles from './RestaurantOrders.module.css';
import data from './restaurantOrders.json';

function RestaurantOrders(){
    const CustomerOrders=data.map(
        (info)=>{
            return(
                <table>
                    <tr>
                     <td className={styles.name}>{info.name}</td>
                        <table>
                <tr>
                    <td><img className = {styles.photo} src = {`/images/${info.picture}`}></img></td>
                    <td className = {styles.title}>{info.title}</td>
                    <td className = {styles.number}>{info.number}</td>
                    <td className = {styles.price}>€{info.price}</td>
                </tr>
                </table>
                </tr>
        <tr>
        <td className={styles.date}>{info.date}
                     <button className={styles.status}>{info.status}</button></td>  
                     
        </tr>
                </table>
            )
        }
    )
 
    return(
        <div>
            <div className={styles.container}>
            <div className={styles.title1}><h3>Orders</h3></div>
            <table className={styles.table}>
                <thead>
                    <tr>
                    <th colspan="7"> Restaurant orders</th>

                    </tr>
                </thead>
                <tbody>
                 
                    
                    {CustomerOrders}
                    
                </tbody>
            </table>
           </div>  
        </div>
    )
 }
 
 export default RestaurantOrders;