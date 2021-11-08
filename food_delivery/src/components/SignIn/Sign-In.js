import React from 'react'
import styles from './Sign-In.module.css'

class SignIn extends React.Component {
    render () {
        return (
            <div className={styles.SignIn}>
                <h1>Log In</h1>
                <input type="text" placeholder="Username" style={{borderRadius: '15px', height: '30px'}}/>
                <div style={{marginTop: '20px'}}></div>
                <input type="text" placeholder="Password" style={{borderRadius: '15px', height: '30px'}}/>
                <button style={{display:'flex', width:'400px', height:"40px", justifyContent:'center', alignItems:'center', backgroundColor: 'crimson', borderRadius:'15px', marginTop: '20px', marginLeft: '17.5%', marginBottom: '20px'}}>Sign In</button>
            </div>
        );
    }
    
}

export default SignIn;
