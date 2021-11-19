import React from 'react'
import styles from './Sign-In.module.css'

class SignIn extends React.Component {
    render () {
        return (
            <div className = {styles.container}>
            <div className = {styles.topBar}><div style = {{alignSelf: 'center'}}>Sign In</div></div>
            <div className={styles.SignIn}>
            <div style = {{fontWeight: '500', marginBottom: '20px'}}>Welcome back!</div>
                <input type="text" placeholder="Username" className ={styles.inputs}/>
                <input type="password" placeholder="Password" className = {styles.inputs}/>
                <button className = {styles.button}><div style = {{fontSize: '16px',fontWeight: '500'}}>Sign in</div></button>
            </div>
            </div>
        );
    }
    
}

export default SignIn;
