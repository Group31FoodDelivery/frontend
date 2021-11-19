import React from 'react'
import styles from './PaymentPage.module.css'

export default function PaymentPage() {
    return (
        <div>
        <div className = {styles.topBar}>Payment</div>
        <div className = {styles.container} >
            CARD NUMBER
            <input type = 'text' placeholder = 'xxxx xxxx xxxx xxxx' className = {styles.inputs}/>
            CVC
            <input type = 'text' placeholder = 'xxx' className = {styles.inputs}/>
            EXIPIRATION DATE
            <input type = 'text' placeholder = 'dd/mm/yyyy' className = {styles.inputs}/>
           <button className = {styles.button}>Confirm</button>
        </div>
        </div>
    )
}
