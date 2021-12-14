import React from 'react';
import styles from './CustomerOrders.module.css';
import data from './orders.json'
import { useEffect } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import { useState } from 'react';


 function CustomerOrders(props){

    const {token} = props;
    const [orders, setOrders] = useState([]);

    useEffect(async() => {

    const user = jwt(token);
    let customerId = user.customer.customerId;
    console.log(customerId);
   //let customerId = '879d5d3c-ca2b-479b-9aa9-619b81e3875c';
       await axios.get('http://localhost:9000/orders/orderhistory/' + customerId)
       .then((response) => {
           console.log(response)
           setOrders(response.data)
           console.log(response.data);
       })
       .catch(error => {
        console.log(error)
       })
    
    }, [])

    
    let editTimeStamp = (timestamp, separator="-") => {

    console.log(timestamp)
    let d = new Date(timestamp);

    
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let hours = d.getUTCHours() + 2;
    let minutes = d.getUTCMinutes();

    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date} ${hours<10 ?`0${hours}`:`${hours}`}:${minutes<10 ? `0${minutes}`:`${minutes}`}`

    }

    
    const CustomerOrders=orders.map(
        (info)=>{
            return(
               
                <tr key = {info.orderId}>
                    <td>{info.Name}</td>
                    <td>{info.Qty}x</td>
                    <td>{info.ItemName} </td>
                    <td>{editTimeStamp(info.TimeStamp)}</td>
                    <td>{info.Price * info.Qty}€</td>
                    <td>{info.State}</td>
                    <td>{info.Time}mins</td>
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