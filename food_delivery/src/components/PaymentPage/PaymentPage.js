import React from 'react'
import styles from './PaymentPage.module.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function PaymentPage(props){

    const {cart} = props;
    const {price} = props;
    const {address} = props;

    const [itemId, setItemId] = useState('')
    const [qnty, setQnty] = useState( )
    const [orderId, setOrderId] = useState('')

    useEffect(() => {

        console.log("orderId")
        console.log(orderId)
       
       let itemId = cart.map(x => x.itemId)
       setItemId(itemId)

       let qnty = cart.map(x => x.amount)
       setQnty(qnty)

       console.log(itemId)
       console.log(qnty)

    }, [cart])

    let timeStamp = '2021';
    let CustomerId = 'dfe456b5-90d6-488b-bf8d-80bae68fb3d9';

    //create Order. Needs time, address, total price, state
    const handleButtonClick = () => {


    axios.post('http://localhost:9000/Addorders' , {
        time: 20,
        customerId: CustomerId,
        address: address,
        price: price,
        state: 'Pending',
        timestamp: timeStamp,
        items: cart
        
   
    })
    .then(function (response) {
        console.log(response.data);
        setOrderId(response.data);
       /* placeItemsIntoOrder();*/

    })
    .catch(function (error){
        console.log(error.response);
    });
    } 



    //set menuitems into the order
    /*const placeItemsIntoOrder = () => {

        console.log(orderId);

        axios.post('/AddOrderItems' , {
            orderId: 'efb6125e-4e0d-48d4-9513-7e48861bc994',
            itemId: 'a4640544-f094-4b8b-b9f1-07d1d7ba34d3',
            amount: 3   
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        });
    }*/
   
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
