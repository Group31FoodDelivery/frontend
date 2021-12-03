import React, {useState} from 'react'
import styles from './Sign-In.module.css'
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn(props) {

let [email, setEmail] = useState("");
let [password, setPassword] = useState("");
let [errorMessage, setErrorMessage] = useState("");
let [isChecked, setIsChecked] = useState(false); /*{
    super(props);
    this.state = {
    email: "",
    password: "",
    token: "",
    errorMessage: "",
    isChecked: false
}
    this.authError = this.authError.bind(this);
    this.checkbox = this.checkbox.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
}*/


function authError() {
    if (errorMessage != "") {
        return (
            <h3> { errorMessage } </h3>
        );
    } else {
        return null;
    }
}

let navigate = useNavigate();

function handleCheck() {

    isChecked = setIsChecked(isChecked = !isChecked);
    //console.log(this.state.isChecked)

}

function checkbox() {
    return (
        <div style={{marginTop: '10px'}}> I want to sign in as a manager
            <input type="checkbox" onChange={handleCheck } />
            </div>
    )
}


/*async loginUser() {
    //console.log(credentials);
    
    axios.post('http://localhost:9000/loginForJWT',null, {

        auth: {
            username: this.state.email,
            password: this.state.password
          }
        }).then(response => {
            console.log("vastaus " + response);
        });
}*/

 const handleSubmit = async(e) => {
    e.preventDefault();
    
    debugger
    if (isChecked){
    
    axios.post('http://localhost:9000/loginForJWT',null, {
        auth: {
            username: email,
            password: password
          }
        }).then(res => {
            console.log("vastaus" + res);
            errorMessage = "";
            props.setToken(res.data.token);
            navigate('/', { replace: true });
        }).catch(err => ({errorMessage: err.message}));
    }

    else {
        axios.post('http://localhost:8000/loginForcustomer',null, {

            auth: {
                username: email,
                password: password
              }
            }).then(res => {
                console.log("vastaus" + res);
                this.setState({errorMessage: ""})
                this.props.setToken(res.data.token);
                
            }).catch(err => ({errorMessage: "Wrong credentials"}));

    }

  }
        


        return (
            <div className = {styles.container}>
            <div className = {styles.topBar}><div style = {{alignSelf: 'center'}}>Sign In</div></div>
            <form onSubmit={handleSubmit}>
            <div className={styles.SignIn}>
            <div style = {{fontWeight: '500', marginBottom: '20px'}}>Welcome back!</div>
            <label>
                <input type="text" placeholder="Email" className ={styles.inputs} onChange={e => {email = setEmail(email = e.target.value)}}/>
            </label>
            <label>
                <input type="password" placeholder="Password" className = {styles.inputs} onChange={e => {password = setPassword(password = e.target.value)}}/>
            </label>
            {checkbox()}
            {authError()}
                <button type = "submit" className = {styles.button} onClick={props.getToken}><div style = {{fontSize: '16px',fontWeight: '500'}}>Sign in</div></button> 
            </div>
            </form>
            </div>
        );
    }
    



export default SignIn;
