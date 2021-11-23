import React from 'react';
import styles from './CreateRestaurant.module.css';

class CreateRestaurant extends React.Component {
    constructor() {
        super();
        this.state = { 
            type: "fine_dining", 
            priceLevel: "1"};
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange(event) {
        this.setState({ type: event.target.value });
    }

    handleChange2(event) {
        this.setState({ priceLevel: event.target.value});
    }

    render() {
        return (
            <div>
            <div className = {styles.title}><h1>Create Restaurant</h1></div>
            <div className = {styles.topBar}>Add a new restaurant</div>
            <div className={styles.CreateRestaurant}>
                <div style = {{marginTop: '10px'}}>Restaurant type</div>
                <select value={this.state.type} onChange={this.handleChange} className = {styles.select} style = {{marginTop: '10px'}} >
                    <option name="fine_dining">Fine Dining</option>
                    <option name="casual_dining">Casual Dining</option>
                    <option name="fast_food">Fast food</option>
                    <option name="buffet">Buffet</option>
                </select>

                <div style = {{marginTop: '10px'}}>Price level</div>
                <select value={this.state.priceLevel} onChange={this.handleChange2} className = {styles.select} style = {{marginTop: '10px'}}>
                    <option name="1">1</option>
                    <option name="2">2</option>
                    <option name="3">3</option>
                    <option name="4">4</option>
                    <option name="5">5</option>
                </select>

                <input type="text" placeholder="Name" className = {styles.inputs}/>

                <textarea type="text" placeholder="Description" cols="40"  rows="5" 
               className = {styles.descriptionInputs}></textarea>

                <input type="text" placeholder="Operating hours"  className = {styles.inputs}/>

                <textarea  type="text" placeholder="Address"  className = {styles.addressInputs}></textarea>
                
                <button className = {styles.button}>Create</button>
            </div>
            </div>
        );
    }

}

export default CreateRestaurant;