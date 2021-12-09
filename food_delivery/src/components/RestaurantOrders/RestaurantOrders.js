import React from 'react';
import styles from './RestaurantOrders.module.css';
import data from './restaurantOrders.json';
import StatusButton from './StatusButton';

function RestaurantOrders(){
    const CustomerOrders=data.map(
        (data)=>{
            return(
             <div className={styles.customerOrders}>
    
             <div className={styles.infoCustomer}>
              <div className={styles.name}><b>{data.name}</b></div>
              <div className={styles.btnData}>
              <div className={styles.date}><b>{data.date}</b>
              <StatusButton/>
            
              </div>
              </div>
              </div>
              <div className={styles.orders}>
                
                <img className = {styles.photo} src = {`/images/${data.picture}`} alt="">
                </img> 
                <div className = {styles.title}>{data.title}</div>
                <div className = {styles.number}>{data.number}</div>
                <div className = {styles.price}>{data.price} € </div>
                </div> 
                </div>
                
            )
        }
    )
    return(
        <div>
            <div className = {styles.order}><h3>Orders</h3></div>
            <div className={styles.table}>
            <div className={styles.titleTable}><h4>Restaurant Orders</h4></div>
            <div className={styles.tables}>
            <div className={styles.leftTable}><b>Recent orders</b></div>
            <div className={styles.rightTable}><b>Friends and Burgers</b></div>
            </div>
            <div className={styles.infoBox}>
                <div className={styles.nameBox}><b>Name</b>Matt Johnson</div>
                <div className={styles.addressBox}><b>Address</b>Cool street 3, Fancy Town</div>
                <div className={styles.phone}><b>Phone number</b>+35812345678</div>
                </div>
              
                 
                    
                    {CustomerOrders}
             </div>       
                    
        </div>
    )
 }
 
 export default RestaurantOrders;