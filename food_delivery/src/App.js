import './App.css';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/Sign-In';
import FrontPage from './components/FrontPage/FrontPage';
import SignUpCustomer from "./components/SignUpCustomer/Sign-Up-Customer";
import MenuPage from './components/MenuPage/MenuPage';
import React from 'react';
import data from './restaurants.json';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

class App extends React.Component {
constructor(props)
{
  super(props)
  this.state =  { 
    restaurants: data.restaurants,  //Saves data from the json file in an array
    itemSearchString: "",             //String that is modified according to the given value on the search bar
    selectedItem: ""
}

}

onSearchChange = (event) => {                              //handles the event when something is typed on the search bar
this.setState({itemSearchString: event.target.value});     //puts the given value into the string
}

render()
{
return (

<BrowserRouter>
    <div className="App">
   <Header itemSearchString = {this.state.itemSearchString} onSearchChange = {this.onSearchChange} />
    </div>
    <div>
      <Routes> 
        <Route path="/" element={<FrontPage restaurants={this.state.restaurants.filter( //filters items based on the string value and sends them as props
     (restaurants) => restaurants.name.includes(this.state.itemSearchString))}/>  } />
        <Route path="/register" element={<SignUpCustomer/>} />
        <Route path="/login" element={<SignIn/>} /> 
        <Route path="/menupages" element={<MenuPage restaurants={this.state.restaurants}/>} />

    

      </Routes>
    
    

   </div>
</BrowserRouter>


);
}
}

export default App;

