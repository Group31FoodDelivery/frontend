import react from 'react';
import styles from './StatusButton.module.css';

export default function StatusButton(props){

function Prepared(){
    var v  = document.getElementById('buttonB').getAttribute("onClick");
    setTimeout(v,0);
}
    return(
        <div>
           
     <button className={styles.btn1} onClick={Prepared}>Recived</button>
     <button className={styles.btn2} onClick={}>Preparing</button>
     <button className={styles.btn3} onClick={}>Ready for delivery</button>
     <button className={styles.btn4} onClick={}>Delivering</button>
     <button className={styles.btn5} onClick={}>Delivered</button>

        </div>
    )
} 