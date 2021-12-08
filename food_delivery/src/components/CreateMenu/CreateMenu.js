import React, { Component } from 'react'
import styles from './CreateMenu.module.css'
import axios from 'axios';
import Select from 'react-select'



export default class CreateMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //name: "0",
            category: "0",
            selectOptions: [],
            restaurantId: "",
            Name: "",
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.getOptions = this.getOptions.bind(this);
    }

    async getOptions() {
        console.log("ASYNCCIÄ "+ this.props.managerId)
        const res = await axios.get('/restaurants/' + this.props.managerId);
        const data = res.data

        const options = data.map(d => ({
            "value" : d.restaurantId,
            "label" : d.Name
        }))

    this.setState({selectOptions: options})

    }

    handleChange(event) {
        this.setState({restaurantId:event.value, Name:event.label})
        console.log("Helloooo " + this.state.restaurantId);
    }
    
    handleChange2(event) {
        this.setState({ category: event.target.value});
        console.log("Hello");
    }

    componentDidMount(){
        this.getOptions();
    }

    render() {
        return (
            <div>
            <div className = {styles.title}> Create Menu</div>
            <div className = {styles.column}>
                <div className = {styles.topBar}>Add menu item</div> 
                <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
                <select value={this.state.category} onChange={this.handleChange2} className={styles.select} style = {{marginTop: "0px"}}>
                    <option value="0" disabled>Select category</option>
                    <option value="1">category1</option>
                    <option value="2">category2</option>                            
                    <option value="3">category3</option>
                    <option value="4">category4</option>
                </select>               
            <input className = {styles.textField} type="text" placeholder="Name"/>   
            <input className = {styles.textField} type="text" placeholder="Approx delivery time"/>
            <input className = {styles.textField} type="text" placeholder="Price"/>
            <form action="">
            <textarea id="desc" name="desc" rows="5" cols="40" placeholder="Enter a description"></textarea>     {/*Textarea for desc, submit action has to be figured out*/}
             {/* <input type = "submit" value="Submit"></input> */}
            </form>
            <button className = {styles.createButton}>Add an image</button>
            <button className = {styles.createButton} style = {{marginBottom: "20px"}}>Add to the menu</button>
            </div>
            </div>    
        );
    }
}
