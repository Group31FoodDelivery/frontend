import React from 'react';
import styles from './FailPage.module.css';
import {Link} from 'react-router-dom';

export default function SuccessPage (){
    return(
    <div>
    <div className={styles.pageContainer}>
    <div className={styles.text}>Sorry, something went wrong. Please, try again!
    </div>
    </div>
    <div className={styles.btnContainer}>
        <Link to={'/shoppingcart'} >
        <button className={styles.btn1} src={'/shoppingcart'}>Back to cart</button>
        </Link>
    </div>
    </div>
    
    )
}