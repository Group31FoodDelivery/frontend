import React, { Component } from 'react'
import styles from './CreateMenu.module.css'
import axios from 'axios';
import Select from 'react-select';
import jwt from 'jwt-decode';



export default class CreateMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //name: "0",
            Category: "",
            selectOptions: [],
            restaurantId: "",
            Name: "",
            managerId: "",
            Description: "",
            Price: "",
            errorMessage: ""
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.getOptions = this.getOptions.bind(this);
        this.error = this.error.bind(this);
    }

    error() {
        if (this.state.errorMessage != "") {
            return (
                <h3> { this.state.errorMessage } </h3>
            );
        } else {
            return null;
        }
    }

    async getOptions() {
        console.log("ASYNCCIÄ "+ this.props.token);
        const user = jwt(this.props.token);
        this.setState({managerId: user.manager.managerId});
        console.log("STATE: " + this.state.managerId);
        const res = await axios.get("/restaurants/" + this.state.managerId);
        const data = res.data

        const options = data.map(d => ({
            "value" : d.restaurantId,
            "label" : d.Name
        }))

    this.setState({selectOptions: options})

    }

    async handleChange(event) {
        this.setState({restaurantId:event.value, Name:event.label});
        await this.timeout(500);
        console.log("Helloooo " + this.state.restaurantId);
    }
    
    handleChange2(event) {
        this.setState({ category: event.target.value});
        console.log("Hello");
    }

    timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }
    
    async componentDidMount(){
        await this.timeout(2000);
        this.getOptions();
    }


    handleSubmit = async e => {
        e.preventDefault();
       
        let formData = {
            Name: this.state.Name,
            Description: this.state.Description,
            Price: this.state.Price,
            Image: "",
            Category: this.state.Category,
            amount: 0,
            restaurantId: this.state.restaurantId
        };
       
       
        if (this.state.Name && this.state.Description && this.state.Price && this.state.Description){

       

        console.log("DATA "+ formData);
        


        const config = {
            headers: {"Authorization": "Bearer " + this.props.token}
        };

        console.log(this.props.token);

        axios.post('http://localhost:9000/addMenuItem/' + this.state.restaurantId,formData, config).then(console.log("postissa")).catch((e) => {
            console.log( e.response )
          });
        console.log("Tähän lisää");
        this.setState({errorMessage: "Successful!"});
        await this.timeout(2000);
        this.setState({errorMessage: ""});

       }
       else{
           console.log(formData);
           this.setState({errorMessage: "Don't leave empty fields!"})
           //console.log("KÄYTTÄJÄ " + JSON.stringify(user.manager.managerId));
       }

    }


    render() {
        return (
            <div style={{alignItems: 'center', justifyContent: 'center'}}>
            <div className = {styles.title}> Create Menu</div>
            <div className = {styles.column}>
            <div className = {styles.topBar}>Add menuitem</div>
            <form onSubmit={this.handleSubmit} style={{alignItems: 'center', justifyContent: 'center', height: '600px', width: '300px'}}> 
                <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
                <input className = {styles.textField} type="text" placeholder="Category" onChange={e => this.setState({Category: e.target.value})}/>               
                <input className = {styles.textField} type="text" placeholder="Name" onChange={e => this.setState({Name: e.target.value})}/>   
                <input className = {styles.textField} type="text" placeholder="Price" onChange={e => this.setState({Price: e.target.value})}/>
            <textarea id="desc" name="desc" rows="5" cols="40" placeholder="Enter a description"  onChange={e => this.setState({Description: e.target.value})}></textarea>     {/*Textarea for desc, submit action has to be figured out*/}
             {/* <input type = "submit" value="Submit"></input> */}
             <this.error/>
             <div className={styles.btn}>
            <button className = {styles.createButton}>Add an image</button>
            <button type ="submit" className = {styles.createButton} style = {{marginBottom: "20px"}}>Add to the menu</button>
            </div>
            </form>
            </div>
            </div>    
        );
    }
}
