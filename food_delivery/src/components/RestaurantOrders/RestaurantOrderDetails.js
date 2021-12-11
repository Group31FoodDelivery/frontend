import React from 'react';
import styles from './RestaurantOrders.module.css';
import CustomerInfo from './CustomerInfo';
import {useState} from 'react';
import { useEffect } from 'react';
import StatusButton from './StatusButton';

export default function RestaurantOrderDetails(props){
    console.log("gkgkg");
    const [orders, setOrders] = useState([]);
    const {token} = props;

  console.log(props);
    const OrderDetails= orders.map(
        (data)=>{
            return(
                <div>    
                <div className={styles.orders}>
                
                <img className = {styles.photo} src = {`/images/${data.Image}`} alt="">
                </img> 
                <div className = {styles.title}>{data.ItemName}</div>
                <div className = {styles.number}>{data.Qty}</div>
                <div className = {styles.price}>{data.Price} € </div>
                </div> 
              <div className={styles.btn1}>
                  <StatusButton token={props.token}/>
                  </div>
                  </div>           

    )
}
    )
return(
    <div>
        <div>
            <div className = {styles.order}><h3>Orders</h3></div>
            <div className={styles.table}>
           
            {orders.map(customer => <CustomerInfo key={customer.customerId} {...customer}/>)}
        </div>
        </div>

     {OrderDetails}

    </div>
)
}