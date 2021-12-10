import React from 'react'
import styles from './PaymentPage.module.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import Alert from 'react-popup-alert';
import { useNavigate } from 'react-router';
const qs = require('qs');

export default function PaymentPage(props){

    const {cart} = props;
    const {price} = props;
    const {address} = props;
    const {token} = props;

    const [itemId, setItemId] = useState('')
    const [qnty, setQnty] = useState( )
    const [customer, setCustomer] = useState('')
    const [cardNum, setCardNum] = useState('')
    const [cvc, setCvc] = useState('')
    const [exipDate, setExipDate] = useState('')

    let navigate = useNavigate();

    const [alert, setAlert] = useState({
        type: 'success',
        text: 'Thank you!',
        show: false
      })
    
      function onShowAlert(type) {
        setAlert({
          type: type,
          text: 'Thank you for your purchase!',
          show: true
        })
      }

      function onCloseAlert() {
        setAlert({
          type: '',
          text: '',
          show: false
        })
      }

    function getCurrentDate(separator='/'){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
        }

    const areFieldsFull = () => {
            return cardNum && cvc && exipDate;
          }

    useEffect(() => {

       console.log(cardNum)
       console.log(cvc)
       console.log(exipDate)
       let itemId = cart.map(x => x.itemId)
       setItemId(itemId)

       let qnty = cart.map(x => x.amount)
       setQnty(qnty)

       console.log(itemId)
       console.log(qnty)


    }, [cart])


    //creates an order
    const handleButtonClick = () => {

    const user = jwt(token);
    let customerId = user.customer.customerId;
    console.log(customerId);
    setCustomer(customerId);

    const config = {
        headers: {"Authorization": "Bearer " + token}
    };

    let timeStamp = getCurrentDate();

    axios.post('http://localhost:9000/Addorders' , {
        time: 20,
        customerId: customerId,
        address: address,
        price: price,
        state: 'Pending',
        timestamp: timeStamp
   
    }, config)
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
    const placeItemsIntoOrder = async (orderId) => {

        let orderIdString = qs.stringify(orderId).substr(8)
        let fail = false;

        for(let i = 0; i<itemId.length; i++) { //goes through the arrays and sends the itemdIds and their quantities

            let itemid = itemId[i];
            let amount = qnty[i];
        
        await axios.post('http://localhost:9000/AddOrderItems' , {

            itemId: itemid,
            orderId: orderIdString,
            amount: amount
        })
        .then(function (response) {
            console.log("responssi")
            console.log(response);
        })
        .catch(function (error){
            console.log("CATHC")
            console.log(error);
            fail = true;
        });
    }
        purchaseDone(fail);
    }

    const purchaseDone = (fail) => {

        if(fail == true){
            navigate('/fail');
            console.log('fail')  //mby navigation to failure page and then button back to shopping cart or sum
        }
        else{
        console.log(fail)
        onShowAlert('success');
        window.localStorage.removeItem('reduxState');
        navigate('/success', { replace: true });
        }
    }
   
    const showAlert = () => {
        if(alert.show == true) {

            return (<Alert
            header={'Header'}
            btnText={'Close'}
            text={alert.text}
            type={alert.type}
            show={alert.show}
            onClosePress={onCloseAlert}
            pressCloseOnOutsideClick={true}
            showBorderBottom={true}
            alertStyles={{}}
            headerStyles={{}}
            textStyles={{}}
            buttonStyles={{}}
          />);
        }
        else {
            return <div><div className = {styles.topBar}>Payment</div>
            <div className = {styles.container} >
                CARD NUMBER
                <input type = 'text' placeholder = 'xxxx-xxxx-xxxx-xxxx' maxLength = {19} onChange={e => setCardNum(e.target.value)} value={cardNum} className = {styles.inputs}/>
                CVC
                <input type = 'text' placeholder = 'xxx' maxLength = {3}  onChange={e => setCvc(e.target.value)} value={cvc} className = {styles.inputs} />
                EXIPIRATION DATE
                <input type = 'text' placeholder = 'dd/mm/yyyy' maxLength = {10} onChange={e => setExipDate(e.target.value)} value={exipDate} className = {styles.inputs}/>
               <button className = {styles.button} onClick = {handleButtonClick} disabled={!areFieldsFull}>Confirm</button>
            </div>
            </div>         
        }

    }

    return (
        <div>
        {showAlert()}
        </div>
    )
}
