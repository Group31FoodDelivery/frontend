import React from 'react';
import styles from './RestaurantOrders.module.css';


export default function CustomerInfo(props){
    const {info} = props;
    

    console.log("props final");
    console.log(props)

return(
    <div className={styles.userContainer}>
<div className={styles.titleTable}><h4>Restaurant Orders</h4></div>
<div className={styles.tables}>
<div className={styles.leftTable}></div>
<div className={styles.rightTable}><b>{info.Name}</b></div>
</div>
<div className={styles.infoBox}>
    <div className={styles.nameBox}><b>Name</b>{info.Username}</div>
    <div className={styles.addressBox}><b>Address</b>{info.address}</div>
    <div className={styles.phone}><b>Email</b>{info.ContactInfo}</div>
    </div>
    </div>
)
}