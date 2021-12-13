import react from 'react';
import styles from './StatusButton.module.css';
import {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';

export default function StatusButton(props){

    const [status, setStatus] = useState('Recived');
    const [time, setTime] = useState('');
    let [counter, setCounter] = useState(1);
    const {orderId} = props;
        
   const changeStatus = () => {
       setCounter(counter + 1);
       if (counter === 7){
           counter = 0;
       }
           switch (counter){ 
        case 1 : 
            let status1 = 'Received';
            setStatus(status1);
            console.log(counter);
            break;
        case 2 : 
        let  status2 = 'Preparing';
            setStatus(status2); 
            console.log(counter); 
            break;  
        case 3: 
            let status3 = 'Ready for delivery';
            setStatus(status3);
            console.log(counter);
            break;
         case 4: 
            let status4 = 'Delivering';
            setStatus(status4);
            console.log(counter);
            break;
        case 5: 
            let status5 ='Delivered';
            setStatus(status5);
            console.log(counter);
            break;
        case 6: 
            let status6 = '';
            setStatus(status6);
            console.log(counter);
            break;
        }
        updateOrder();        
    }

    const updateOrder = async () => {

        console.log("status")
        console.log(status)
        console.log("time")
        console.log(time)
        console.log("orderId")
        console.log(orderId)
        await axios.put('/orders/' + orderId, {
            state: status,
            time: time
        });
    }

    return(
        <div>
        <div className={styles.btnContainer}>    
     <button className={styles.btn1} onClick={changeStatus}>{status}
     </button>
     <input className={styles.time} placeholder = "Deliverytime" onChange = {e => setTime(e.target.value)}></input>
        </div>
        </div>
    )
} 