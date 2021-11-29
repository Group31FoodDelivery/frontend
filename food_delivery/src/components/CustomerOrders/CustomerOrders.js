import React from 'react';
import styles from './CustomerOrders.module.css';
import data from './orders.json'


 function CustomerOrders(){
    const CustomerOrders=data.map(
        (info)=>{
            return(
            
                <tr>
                    <td>{info.restaurant}</td>
                    <td>{info.products}</td>
                    <td>{info.date}</td>
                    <td>€{info.price}</td>
                    <td>{info.delivery}
                        {info.time} </td>
                </tr>
            
            )
        }
    )
 
    return(
        <div>
            <div className={styles.container}>
            <div className={styles.title}><h3>Orders</h3></div>
            <table className={styles.table}>
                <thead>
                    <tr>
                    <th className={styles.th1} colspan="7"> Your orders</th>

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
 
 export default CustomerOrders;