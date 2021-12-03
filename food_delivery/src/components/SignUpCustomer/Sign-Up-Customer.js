import React from 'react'
import styles from './Sign-Up-Customer.module.css'
import axios from 'axios';

class SignUpCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Firstname: "",
            Lastname: "",
            Username: "",
            Address: "",
            ContactInfo: "",
            Password: "",
            isChecked: false
        }

        this.checkbox = this.checkbox.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.userOrManager = this.userOrManager.bind(this);
    }

    userOrManager() {
        if (this.state.isChecked){
            return (
                <><input type="text" placeholder="Name" className={styles.inputs} onChange={e => this.setState({Firstname: e.target.value})}/><div style={{ marginTop: '20px' }}></div>
                <input type="text" placeholder="Last Name" className={styles.inputs} onChange={e => this.setState({Lastname: e.target.value})}/><div style={{ marginTop: '20px' }}></div></>
            )
        } else {
            return (
                <><input type="text" placeholder="Username" className={styles.inputs} onChange={e => this.setState({Username: e.target.value})}/><div style={{ marginTop: '20px' }}></div></>
            )
        }
    }


    handleCheck() {

        this.setState({isChecked: !this.state.isChecked});
        console.log(this.state.isChecked)
    
    }

    checkbox() {
        return (
            <div style={{marginTop: '40px'}}>
                    Check this box if you want to register as a manager!
                    <input type="checkbox" onChange={this.handleCheck} style={{marginLeft: '10px'}}/>
                </div>
        )
    }

    


    handleSubmit = async e => {
        e.preventDefault();

        let formData = {
            Firstname: this.state.Firstname,
            Lastname: this.state.Lastname,
            Address: this.state.Address,
            ContactInfo: this.state.ContactInfo,
            Password: this.state.Password
        };
    
        let formData2 = {
            Username: this.state.Username,
            Address: this.state.Address,
            ContactInfo: this.state.ContactInfo,
            Password: this.state.Password
        };

        if (this.state.isChecked) {
            axios.post('http://localhost:9000/registerManager',formData).then(res => {
                console.log(res);
            })
        } else {
            axios.post('http://localhost:8000/register',formData2, {
                headers: formData2
            })
        }

    }
 
    render () {
        return (
            <div className = {styles.container}>
            <div className = {styles.topBar}>
                <div>Sign Up</div>
            </div>
            <div className={styles.SignUpCustomer}>
                <div style = {{maringTop: '20px', marginBottom: '40px', fontWeight: '500'}}>New user? Register here!</div>
                <form onSubmit={this.handleSubmit}>
                    <this.userOrManager/>

                    <input type="text" placeholder="Email or phone number" className = {styles.inputs} onChange={e => this.setState({ContactInfo: e.target.value})}/>
                    <div style={{marginTop: '20px'}}></div>

                    <input type="text" placeholder="Address" className = {styles.inputs} onChange={e => this.setState({Address: e.target.value})}/>
                    <div style={{marginTop: '20px'}}></div>

                    <input type="password" placeholder="Password" className = {styles.inputs} onChange={e => this.setState({Password: e.target.value})}/>

                    <this.checkbox/>

                    <button className = {styles.button} type="submit"><div style = {{fontSize: '16px', fontWeight: '500'}}>Create a new account</div></button>
                </form>
            </div>
            </div>
        );
    }
    
}

export default SignUpCustomer;
