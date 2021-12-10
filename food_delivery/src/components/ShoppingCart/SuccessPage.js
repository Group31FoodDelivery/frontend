import React from 'react';
import styles from './SuccessPage.module.css';
import {Link} from 'react-router-dom';

export default function SuccessPage (){
    return(
    <div>
    <div className={styles.pageContainer}>
    <div className={styles.text}>The operation was successful! Thank you for your order!
    </div>
    <div className={styles.btnContainer}>
        <Link to={'/orders'} onclick ={() => {window.location.href="/orders"}}>
        <button className={styles.btn1} src={'/orders'}>See your orders</button>
        </Link>
        <Link to={'/'} onclick={() => window.location.reload()}>
        <button className={styles.btn1} src={'/'}>Main page</button>
    </Link>
    </div>
    </div>
    </div>
    )
}

