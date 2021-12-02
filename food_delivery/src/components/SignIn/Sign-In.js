import React, {useState} from 'react'
import styles from './Sign-In.module.css'
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

class SignIn extends React.Component {

constructor(props) {
    super(props);
    this.state = {
    email: "",
    password: "",
    token: ""
}

}

/*setToken(token) {
    this.setState({token: token});
    
}*/

async loginUser() {
    //console.log(credentials);
    axios.post('http://localhost:9000/loginForJWT',null, {

        auth: {
            username: this.state.email,
            password: this.state.password
          }
        }).then(res => {
            //console.log(res.data.token);
            //this.setToken(res.data.token);
            //window.localStorage.setItem('token', JSON.stringify(res.data.token));
        });
   /*method: 'POST',
   headers: {
     'Content-Type': 'application/json',
     'Authorization': 'basic'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())*/
}

handleSubmit = async e => {
    e.preventDefault();
    axios.post('http://localhost:9000/loginForJWT',null, {

        auth: {
            username: this.state.email,
            password: this.state.password
          }
        }).then(res => {
            console.log(res.data.token);
            this.props.setToken(res.data.token);
            //this.setToken(res.data.token);
            //window.localStorage.setItem('token', JSON.stringify(res.data.token));
        });
    /*const token = await this.loginUser({
      email: this.state.email,
      password: this.state.password
    });*/
    //this.setToken(token);
    //console.log(token);
  }
        


    render () {
        return (
            <div className = {styles.container}>
            <div className = {styles.topBar}><div style = {{alignSelf: 'center'}}>Sign In</div></div>
            <form onSubmit={this.handleSubmit}>
            <div className={styles.SignIn}>
            <div style = {{fontWeight: '500', marginBottom: '20px'}}>Welcome back!</div>
            <label>
                <input type="text" placeholder="Email" className ={styles.inputs} onChange={e => this.setState({email: e.target.value})}/>
            </label>
            <label>
                <input type="password" placeholder="Password" className = {styles.inputs} onChange={e => this.setState({password: e.target.value}, console.log(this.state.password))}/>
            </label>
                <button type = "submit" className = {styles.button} onClick={this.props.getToken}><div style = {{fontSize: '16px',fontWeight: '500'}}>Sign in</div></button> 
            </div>
            </form>
            </div>
        );
    }
    
}

/*SignIn.propTypes = {
    setToken: PropTypes.func.isRequired
  };*/

export default SignIn;
