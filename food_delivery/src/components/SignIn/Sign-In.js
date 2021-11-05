import React from 'react'
import styles from './Sign-In.module.css'

class SignIn extends React.Component {
    render () {
        return (
            <div className={styles.Header}>
                <input type="text" placeholder="Username" style={{borderRadius: '15px', height: '30px'}}/>
                <div style={{marginTop: '20px'}}></div>
                <input type="text" placeholder="Password" style={{borderRadius: '15px', height: '30px'}}/>
                <span style={{display:'flex', width:'400px', height:"40px", justifyContent:'center', alignItems:'center', backgroundColor: 'crimson', borderRadius:'15px', marginTop: '20px', marginLeft: '39%'}}>Sign In</span>
            </div>
        );
    }
    
}

export default SignIn;
