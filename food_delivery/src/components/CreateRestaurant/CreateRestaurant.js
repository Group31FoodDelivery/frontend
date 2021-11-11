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
            <div className={styles.CreateRestaurant}>
                <h1 style={{marginLeft: '220px'}}>Restaurant</h1>
                <div style={{marginLeft: '220px', marginBottom: '10px'}}>Restaurant type</div>
                <select value={this.state.type} onChange={this.handleChange} style={{borderRadius: '15px', height: '30px', width: '100px', marginLeft: '220px', marginBottom: '10px'}}>
                    <option name="fine_dining">Fine Dining</option>
                    <option name="casual_dining">Casual Dining</option>
                    <option name="fast_food">Fast food</option>
                    <option name="buffet">Buffet</option>
                </select>

                <div style={{marginLeft: '220px', marginBottom: '10px'}}>Price level</div>
                <select value={this.state.priceLevel} onChange={this.handleChange2} style={{borderRadius: '15px', height: '30px', width: '100px', marginLeft: '220px'}}>
                    <option name="1">1</option>
                    <option name="2">2</option>
                    <option name="3">3</option>
                    <option name="4">4</option>
                    <option name="5">5</option>
                </select>
                <div style={{marginTop: '20px'}}></div>

                <input type="text" placeholder="Name" style={{borderRadius: '15px', height: '30px', marginLeft: '220px'}}/>
                <div style={{marginTop: '20px'}}></div>

                <input type="text" placeholder="Description" style={{borderRadius: '15px', height: '30px', marginLeft: '220px'}}/>
                <div style={{marginTop: '20px'}}></div>

                <input type="text" placeholder="Operating hours" style={{borderRadius: '15px', height: '30px', marginLeft: '220px'}}/>
                <div style={{marginTop: '20px'}}></div>

                <input type="text" placeholder="Address" style={{borderRadius: '15px', height: '30px', marginLeft: '220px'}}/>
                <div style={{marginTop: '20px'}}></div>
                
                <button style={{display:'flex', width:'400px', height:"40px", justifyContent:'center', alignItems:'center', backgroundColor: '#cc2255', borderRadius:'15px', marginTop: '20px', marginLeft: '17.5%', marginBottom: '40px'}}>Create</button>
            </div>
        );
    }

}

export default CreateRestaurant;