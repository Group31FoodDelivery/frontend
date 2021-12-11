import React from 'react';
import styles from './RestaurantOrders.module.css';
import data from './restaurantOrders.json';
import StatusButton from './StatusButton';
import {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import RestaurantOrderDetails from './RestaurantOrderDetails';

function RestaurantOrders(props){
    const [orders, setOrders] = useState([]);
    const {token} = props;


    useEffect(async() => {
        const user = jwt(token);
        console.log('yeah');
        let managerId = 'a09cca1d-77d9-483d-a3fd-da2b786acf4e';
        console.log(managerId);

       //let customerId = '879d5d3c-ca2b-479b-9aa9-619b81e3875c';
           await axios.get('http://localhost:9000/orders/' + managerId)
           .then((response) => {
               console.log(response)
               setOrders(response.data)
           })
           .catch(error => {
            console.log(error)
           })
        }, [])

        const [view, setView] = useState([]);
        const test=()=>{
            setView('view');   
            console.log('view') 

        }
        const orderInfo = (info)=> {
            setView(info);   

          
            
        }
    const CustomerOrders=orders.map(
        (data)=>{
            return(
             <div className={styles.customerOrders}>
    
             <div key={data.orderId} id={data} onClick={()=> orderInfo(data)} className={styles.infoCustomer} >
              <div className={styles.name}><b>{data.Firstname} {data.Surname}</b></div>
              <div className={styles.btnData}>
              <div className={styles.date}><b>{data.TimeStamp}</b>
              <div className={styles.btn1}>
                  <StatusButton token={props.token}/>
                  </div>

            
              </div>
              </div>
              </div>
            
                </div>
                
            )
        }
    )
    return(
        <div>
            <div className = {styles.order}><h3>Orders</h3></div>
            <div className={styles.table}>
           
            <RestaurantOrderDetails info={view}/>

                 
                    <div>
                    {CustomerOrders}
                    </div>
             </div>       
                    
        </div>
    )
 }
 
 export default RestaurantOrders;