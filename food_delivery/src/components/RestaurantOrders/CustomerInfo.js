import React from 'react';
import styles from './RestaurantOrders.module.css';


export default function CustomerInfo(props){
    
return(
    <div>
<div className={styles.titleTable}><h4>Restaurant Orders</h4></div>
<div className={styles.tables}>
<div className={styles.leftTable}><b>Recent orders</b></div>
<div className={styles.rightTable}><b>{props.Name}</b></div>
</div>
<div className={styles.infoBox}>
    <div className={styles.nameBox}><b>{props.Firstname}</b>{props.Surname}</div>
    <div className={styles.addressBox}><b>Address</b>{props.Address}</div>
    <div className={styles.phone}><b>Phone number</b></div>
    </div>
    </div>
)
}