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
    const {info} = props;
    
console.log("props here")

  console.log(info);
   
   if(info == "")
   {
    return(
        <div>
        
        <div className = {styles.order}><h3>Orders</h3></div>
        
          </div>           

)
   }
    else {
            return(
                <div>
                <div>
                <div>
                <div className = {styles.order}><h3>Orders</h3></div>
                <div className={styles.table}>
                 <CustomerInfo info = {info}/>
                </div>
                </div>


                </div>    
                <div className={styles.orders}>
                
                <img className = {styles.photo} src = {`/images/${info.Image}`} alt="">
                </img> 
                <div className = {styles.title}>{info.ItemName}</div>
                <div className = {styles.number}>{info.Qty}x</div>
                <div className = {styles.price}>{info.Price} € </div>
                </div> 
                  </div>           

    )
}

//return(
    //<div>
        //<div>
           // <div className = {styles.order}><h3>Orders</h3></div>
           // <div className={styles.table}>
           
           // {orders.map(customer => <CustomerInfo key={customer.customerId} {...customer}/>)}
       // </div>
       // </div>

     //{OrderDetails}

    //</div>
//)
}