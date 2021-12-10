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
    //    if (counter === 0) {
    //        let status8 = 'Change status';
    //        setStatus(status8);
    //    }
       
       
        // switch (counter){ 
        // if(counter ===1){
        //    let status1 = 'Recived';
        //     setStatus(status1);
        // } else if(counter ===2){
        //    let  status2 = 'Preparing';
        //     setStatus(status2);
        // }
        // else if(counter ===3){
        //     let status3 = 'Ready for delivery';
        //     setStatus(status3);
        // }
        // else if(counter ===4){
        //     let status4 = 'Delivering';
        //     setStatus(status4);
        // }

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
                
        //  } if (counter === 6){
        //             counter = 0;
        //         }
            

            
    }

    return(
        <div>
           
     <button className={styles.btn1} onClick={changeStatus}>{status}</button>
     {/* <button className={styles.btn2} >Preparing</button> */}
     {/* <button className={styles.btn3} onClick={}>Ready for delivery</button>
     <button className={styles.btn4} onClick={}>Delivering</button>
     <button className={styles.btn5} onClick={}>Delivered</button>  */}

        </div>
    )
} 