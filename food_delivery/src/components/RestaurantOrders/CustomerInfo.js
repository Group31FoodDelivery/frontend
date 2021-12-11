import React from 'react';
import styles from './RestaurantOrders.module.css';


export default function CustomerInfo(props){
    const {info} = props;
    

    console.log("props final");
    console.log(props)
return(
    <div>
<div className={styles.titleTable}><h4>Restaurant Orders</h4></div>
<div className={styles.tables}>
<div className={styles.leftTable}><b>Recent orders</b></div>
<div className={styles.rightTable}><b>{info.Name}</b></div>
</div>
<div className={styles.infoBox}>
    <div className={styles.nameBox}><b>Name</b>{info.Firstname} {info.Surname}</div>
    <div className={styles.addressBox}><b>Address</b>{info.Address}</div>
    <div className={styles.phone}><b>Email</b>{info.ContactInfo}</div>
    </div>
    </div>
)
}