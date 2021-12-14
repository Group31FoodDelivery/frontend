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
        
        
          </div>           

)
   }
    else {
            return(
                <div>
                <div>
                <div>
                <div className={styles.tableCustomer}>
                 <CustomerInfo info = {info}/>
                </div>
                </div>


                </div>    
                <div className={styles.orders}>
                
                <img className = {styles.photo} src = {`http://localhost:9000/menuitems/images/${info.itemId}`} alt="">
                </img> 
                <div className = {styles.title}>{info.ItemName}</div>
                <div className = {styles.number}>{info.Qty}x</div>
                <div className = {styles.price}>{info.Price} € </div>
                </div> 
                  </div>           

    )
}


}