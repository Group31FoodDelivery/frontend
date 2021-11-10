import React from 'react'
import styles from './Sign-Up-Customer.module.css'

class SignUpCustomer extends React.Component {
    render () {
        return (
            <div className={styles.SignUpCustomer}>
                <h1 style={{marginLeft: '250px'}}>Sign Up</h1>
                <input type="text" placeholder="Username" style={{borderRadius: '15px', height: '30px', marginLeft: '220px'}}/>
                <div style={{marginTop: '20px'}}></div>

                <input type="text" placeholder="Last Name" style={{borderRadius: '15px', height: '30px', marginLeft: '220px'}}/>
                <div style={{marginTop: '20px'}}></div>

                <input type="text" placeholder="Email" style={{borderRadius: '15px', height: '30px', marginLeft: '220px'}}/>
                <div style={{marginTop: '20px'}}></div>

                <input type="text" placeholder="Phone Number" style={{borderRadius: '15px', height: '30px', marginLeft: '220px'}}/>
                <div style={{marginTop: '20px'}}></div>

                <input type="text" placeholder="Password" style={{borderRadius: '15px', height: '30px', marginLeft: '220px'}}/>
                <button style={{display:'flex', width:'400px', height:"40px", justifyContent:'center', alignItems:'center', backgroundColor: '#cc2255', borderRadius:'15px', marginTop: '20px', marginLeft: '17.5%', marginBottom: '40px'}}>Register</button>
            </div>
        );
    }
    
}

export default SignUpCustomer;
