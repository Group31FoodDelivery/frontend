import React from 'react'
import styles from './Sign-Up-Customer.module.css'

class SignUpCustomer extends React.Component {

    render () {
        return (
            <div className = {styles.container}>
            <div className = {styles.topBar}>
                <div>Sign Up</div>
            </div>
            <div className={styles.SignUpCustomer}>
                <div style = {{maringTop: '20px', marginBottom: '40px', fontWeight: '500'}}>New user? Register here!</div>
                <input type="text" placeholder="Name" className = {styles.inputs}/>
                <div style={{marginTop: '20px'}}></div>

                <input type="text" placeholder="Last Name" className = {styles.inputs}/>
                <div style={{marginTop: '20px'}}></div>

                <input type="text" placeholder="Email" className = {styles.inputs}/>
                <div style={{marginTop: '20px'}}></div>

                <input type="text" placeholder="Phone Number" className = {styles.inputs}/>
                <div style={{marginTop: '20px'}}></div>

                <input type="password" placeholder="Password" className = {styles.inputs}/>

                <div style={{marginTop: '40px'}}>
                    Check this box if you want to register as a manager!
                    <input type="checkbox" style={{marginLeft: '10px'}}/>
                </div>
                
                <button className = {styles.button}><div style = {{fontSize: '16px', fontWeight: '500'}}>Create a new account</div></button>
            </div>
            </div>
        );
    }
    
}

export default SignUpCustomer;
