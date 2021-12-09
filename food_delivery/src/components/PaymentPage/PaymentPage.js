import React from 'react'
import styles from './PaymentPage.module.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const qs = require('qs');

export default function PaymentPage(props){

    const {cart} = props;
    const {price} = props;
    const {address} = props;

    const [itemId, setItemId] = useState('')
    const [qnty, setQnty] = useState( )

    function getCurrentDate(separator='/'){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
        }

    useEffect(() => {

       
       let itemId = cart.map(x => x.itemId)
       setItemId(itemId)

       let qnty = cart.map(x => x.amount)
       setQnty(qnty)

       console.log(itemId)
       console.log(qnty)


    }, [cart])

    let CustomerId = 'dfe456b5-90d6-488b-bf8d-80bae68fb3d9';

    //creates an order, needs real customerId
    const handleButtonClick = () => {

    let timeStamp = getCurrentDate();

    axios.post('http://localhost:9000/Addorders' , {
        time: 20,
        customerId: CustomerId,
        address: address,
        price: price,
        state: 'Pending',
        timestamp: timeStamp
   
    })
    .then(function (response) {
        console.log(response.data);
        let orderId = response.data;
        placeItemsIntoOrder(orderId);

    })
    .catch(function (error){
        console.log(error.response);
    });
    } 

    //set menuitems into the order
    const placeItemsIntoOrder = (orderId) => {

        let orderIdString = qs.stringify(orderId).substr(8)

        for(let i = 0; i<itemId.length; i++) { //goes through the arrays and sends the itemdIds and their quantities

            let itemid = itemId[i];
            let amount = qnty[i];

            console.log("sisältö")
            console.log(itemid)
            console.log(amount)
        
        axios.post('http://localhost:9000/AddOrderItems' , {

            itemId: itemid,
            orderId: orderIdString,
            amount: amount
        })
        .then(function (response) {
            console.log("responssi")
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        });
    }
    }
   
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
           <button className = {styles.button} onClick = {handleButtonClick}>Confirm</button>
        </div>
        </div>
    )
}
