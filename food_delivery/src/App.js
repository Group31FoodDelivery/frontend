import './App.css';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/Sign-In';
import FrontPage from './components/FrontPage/FrontPage';
import SignUpCustomer from "./components/SignUpCustomer/Sign-Up-Customer";
import MenuPage from './components/MenuPage/MenuPage';
import CreateRestaurant from './components/CreateRestaurant/CreateRestaurant';
import CustomerOrders from './components/CustomerOrders/CustomerOrders';
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"
import CustomerInfoPage from './components/CustomerInfoPage/CustomerInfoPage';
import CreateMenu from "./components/CreateMenu/CreateMenu"
import RestaurantOrders from './components/RestaurantOrders/RestaurantOrders';
import PaymentPage from './components/PaymentPage/PaymentPage';
import ManagerFrontPage from './components/ManagerFrontPage/ManagerFrontPage'
import BottomBar from './components/BottomBar/BottomBar';
import React from 'react';
import data from './restaurants.json';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

class App extends React.Component {
constructor(props)
{
  super(props)
  this.state =  { 
    restaurants: data.restaurants,  //Saves data from the json file in an array
    itemSearchString: "",             //String that is modified according to the given value on the search bar
    selectedItem: "",
    restaurantData: [],
    error: ''
}

}

async componentDidMount(){

  try {
    const response = await axios.get('/restaurants'); //sends a request and waits til the response is fetched
    //const data = await response;
    this.setState({restaurantData: response.data}); //sets the promise response object to restaurantData

  } catch(err) {
    console.log(err);
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
        <Route path="/" element={<FrontPage restaurantData={this.state.restaurantData.filter( //filters items based on the string value and sends them as props
     (restaurantData) => restaurantData.Name.includes(this.state.itemSearchString))}/>  } />
        <Route path="/register" element={<SignUpCustomer/>} />
        <Route path="/createrestaurant" element={<CreateRestaurant/>}/>
        <Route path="/login" element={<SignIn/>} />  
        <Route path="/menupages/:restaurantId" element={<MenuPage/>} />
        <Route path="/orders" element={<CustomerOrders/>} />
        <Route path="/shoppingcart" element={<ShoppingCart/>} /> 
        <Route path="/customerinfo" element={<CustomerInfoPage/>} />
        <Route path="/createmenu" element={<CreateMenu/>} /> 
        <Route path="/restaurantorders" element={<RestaurantOrders/>} /> 
        <Route path="/payment" element={<PaymentPage/>} /> 
        <Route path="/managerview" element={<ManagerFrontPage restaurants={this.state.restaurants}/>} /> 
      </Routes>
      <BottomBar></BottomBar>
   </div>
</BrowserRouter>
);
}
}

export default App;

