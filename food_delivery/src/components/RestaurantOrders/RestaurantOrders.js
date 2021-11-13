import React from 'react';
import styles from './RestaurantOrders.module.css';
import data from './restaurantOrders.json';

function RestaurantOrders(){
    const CustomerOrders=data.map(
        (data)=>{
            return(
        
        
                <tr>
                   
                    <td className={styles.title}><img className = {styles.photo} src = {`/images/${data.picture}`} alt=""></img></td>
                    <td className = {styles.title}>{data.title}</td>
                    <td className = {styles.number}>{data.number}</td>
                    <td className = {styles.price}>€{data.price}</td>
                </tr>
                /* <tr>
                     <td className={styles.name}>{data.name}</td>
                     <td className={styles.date}>{data.date}
                     <button className={styles.status}>{data.status}</button></td>   */
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
                    <tr>
                    <th className={styles.restaurantName} colspan="7"> <h4>Friends and Burgers Oulu</h4> </th>
                    </tr>
                    <div className={styles.info}><tr className={styles.customerInfo}>
                    <th className={styles.customerInfo1} cosplan ="2"  ><b>Name</b> Matt Johnson</th>
                    <th className={styles.customerInfo} cosplan ="5" ><b>Address</b></th>
                    <th className={styles.customerInfo} cosplan ="1"><b>Phone number</b></th>
                    </tr>
                    </div>
                    <tr>
                        <td>Matt Johnson</td>
                        <td>Cool street 3, Fancy Town</td>
                        <td>+358123456</td>
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