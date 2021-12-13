import React from 'react';
import styles from './SuccessPage.module.css';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

export default function SuccessPage (){
   
    return(
    <div>
    <div className={styles.pageContainer}>
    <div className={styles.text}>The operation was successful! Thank you for your order!
    </div>
    <div className={styles.btnContainer}>
        <Link to={'/orders'}>
        <button className={styles.btn1} src={'/orders'}>See your orders</button>
        </Link>
        <Link to={'/'}>
        <button className={styles.btn1} src={'/'}>Main page</button>
    </Link>
    </div>
    </div>
    </div>
    )
}

