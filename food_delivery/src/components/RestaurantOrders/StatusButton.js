import react from 'react';
import styles from './StatusButton.module.css';
import {useState} from 'react';

export default function StatusButton(){

    const [status, setStatus] = useState('Change status');
    let [counter, setCounter] = useState(1);

    
   const changeStatus = ()=>{ 
       setCounter(counter + 1);
       if (counter === 7){
           counter = 0;
       }
           switch (counter){ 
        case 1 : 
            let status1 = 'Recived';
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

            
    }

    return(
        <div>
           
     <button className={styles.btn1} onClick={changeStatus}>{status}
     </button>
        </div>
    )
} 