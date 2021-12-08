import React, { Component } from 'react'
import styles from './CreateMenu.module.css'



export default class CreateMenu extends Component {
    constructor() {
        super();
        this.state = { 
            name: "0",
            category: "0"  
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
        console.log("Helloooo");
    }
    
    handleChange2(event) {
        this.setState({ category: event.target.value});
        console.log("Hello");
    }

    render() {
        return (
            <div>
            <div className = {styles.title}> Create Menu</div>
            <div className = {styles.column}>
                <div className = {styles.topBar}>Add menu item</div> 
            <select value={this.state.name} onChange={this.handleChange} className={styles.select}>
                    <option value="0" disabled>Select restaurant</option>
                    <option value="1">Hugo</option>
                    <option value="2">ABC</option>                               {/*should add more options when user makes a restaurant*/}
                    <option value="3">Sushi place</option>
                    <option value="4">Hesburger</option>
                </select>
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
