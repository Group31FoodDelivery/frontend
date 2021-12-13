import React from 'react';
import styles from './CreateRestaurant.module.css';
import axios from 'axios';
import jwt from 'jwt-decode';

class CreateRestaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            type: "fine_dining", 
            priceLevel: "1",
            name: "",
            description: "",
            operatingHours: "",
            address: "",
            errorMessage: "",
            file: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.error = this.error.bind(this);
        /*
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)*/
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

    timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    handleChange(event) {
        this.setState({ type: event.target.value });
    }

    handleChange2(event) {
        this.setState({ priceLevel: event.target.value});
    }

    handleRestaurant = async e => {
        e.preventDefault();
       
        let formData = {
            Name: this.state.name,
            Address: this.state.address,
            OperatingHours: this.state.operatingHours,
            Price_level: this.state.priceLevel,
            Type: this.state.type,
            Rating: 3,
            Description: this.state.description,
            Image: "",
            managerId: ""
        };
       
       
        if (this.state.name && this.state.address && this.state.operatingHours && this.state.description){

       

        console.log("DATA "+ formData);
        
        const user = jwt(this.props.token);
        this.setState({managerId: JSON.stringify(user.manager.managerId)});


        const config = {
            headers: {"Authorization": "Bearer " + this.props.token}
        };

        console.log(this.props.token);

        axios.post('http://localhost:9000/restaurants',formData, config).then(console.log("postissa")).catch((e) => {
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

    /*onFormSubmit(e){
        e.preventDefault()
        const url = '/restaurants/images/:restaurantId';
        const formData = new FormData();
        formData.append('file', this.state.file);
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
        post(url, formData, config);
          .then((response) => {
            console.log(response.data);
          })
      }
      
      
        onChange(e) {
    this.setState({ file: e.target.files[0 ]})
  }
      
      
      
      */

    /* imagePosting = event => {
        this.setState({image: event.target.files[0]})

    }

    ImageUpload = () => {
         let PostedImage = {
            Image: this.state.image,
            restaurantId: "this.state.restaurantid"
        }

    }*/


    render() {
        return (
            <div>
            <div className = {styles.title}> Create Restaurant </div>
            <div className = {styles.topBar}>Add a new restaurant</div>
            <form className={styles.CreateRestaurant} onSubmit={this.handleRestaurant}>
            
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

                <input type="text" placeholder="Name" className = {styles.inputs} onChange={e => this.setState({name: e.target.value})}/>

               {/* <input type="text" placeholder="Description" cols="40"  rows="5" 
               className = {styles.descriptionInputs} onChange={e => this.setState({description: e.target.value})}></input> */}

                <input type="text" placeholder="Description"  className = {styles.descriptionInputs} onChange={e => this.setState({description: e.target.value})}/>

                <input type="text" placeholder="Operating hours"  className = {styles.inputs} onChange={e => this.setState({operatingHours: e.target.value})}/>
                <input type="text" placeholder="Address"  className = {styles.inputs} onChange={e => this.setState({address: e.target.value})}/>

               <this.error/>
                {/*<input  type="text" placeholder="Address"  className = {styles.addressInputs} onChange={e => this.setState({address: e.target.value})} > </input> */}
                <div className={styles.chooseFile} >
               <input type="file" className={styles.file} onChange={this.imagePosting} />
               <button on onClick={this.ImageUpload} className={styles.btnFile}>
                   Upload
               </button>

            </div>
                <button type="submit" className = {styles.button}>Create</button>
            
            </form>

           
            </div>
        );
    }

}

export default CreateRestaurant;