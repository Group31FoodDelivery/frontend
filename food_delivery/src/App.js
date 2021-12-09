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
import React, { useState } from 'react';
import data from './restaurants.json';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import useToken from './useToken';
import jwt from 'jwt-decode';

//const { token, setToken } = useToken();


class App extends React.Component {

constructor(props)
{
  super(props)
  this.state =  { 
    restaurants: data.restaurants,  //Saves data from the json file in an array
    itemSearchString: "",             //String that is modified according to the given value on the search bar
    selectedItem: "",
    restaurantData: [],
    error: '',
    token: "",
    managerId: ""
}
this.getToken = this.getToken.bind(this);
this.logout = this.logout.bind(this);

//const [token, setToken] = useState();
/*if(!token) {
  return <SignIn setToken={setToken}></SignIn>
}*/
}

getToken() {
  const tokenString = window.localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  console.log("usertoken " + userToken)
  this.setState({token: userToken});
  if (userToken != null && userToken != "") {
    const user = jwt(userToken);
    if(user.hasOwnProperty("manager")) {
      this.setState({managerId: user.manager.managerId});
      console.log("ID " + this.state.managerId);
      return this.state.managerId;
    }
  }
  //this.setState({managerId: JSON.stringify(user.manager.managerId)});
  //return userToken?.token;
}

setToken(userToken) {
  window.localStorage.setItem('token', JSON.stringify(userToken));
  console.log("Setting token");
  this.getToken();
}

logout() {
  window.localStorage.removeItem('token');
  this.setState({token: ""});
  this.setState({managerId: ""});
  console.log("Logout")
}


async componentDidMount(){
  try {
    const response = await axios.get('/restaurants'); //sends a request and waits til the response is fetched
    //const data = await response;
    console.log(response.data);
    this.setState({restaurantData: response.data}); //sets the promise response object to restaurantData
    if(this.state.managerId != null && this.state.managerId != "") {
      console.log("Testaillaan " + this.state.restaurantData);
      
    }

  } catch(err) {
    console.log(err);
  } 
  this.getToken();
  console.log("HALOO"+this.state.managerId);
  console.log("Apin tokeni " + this.state.token);

}

onSearchChange = (event) => {                              //handles the event when something is typed on the search bar
this.setState({itemSearchString: event.target.value});     //puts the given value into the string
}


 
render()
{
  //this.getToken();
  
return (
<BrowserRouter>
    <div className="App">
   <Header itemSearchString = {this.state.itemSearchString} onSearchChange = {this.onSearchChange} token = {this.state.token} logout = {this.logout}/>

    </div>
    <div>
      <Routes> 
        <Route path="/" element={<FrontPage restaurantData={this.state.restaurantData.filter( //filters items based on the string value and sends them as props
     (restaurantData) => (restaurantData.Name.toLowerCase().includes(this.state.itemSearchString.toLowerCase()))
    && (restaurantData.managerId.includes(this.state.managerId)))}/>  } />
        <Route path="/register" element={<SignUpCustomer/>} />
        <Route path="/createrestaurant" element={<CreateRestaurant token = {this.state.token}/>}/>
        <Route path="/login" element={<SignIn setToken={this.setToken} getToken={this.getToken}/>} />  
        <Route path="/menupages/:restaurantId" element={ <MenuPage restaurantData = {this.state.restaurantData}/>  } />
        <Route path="/orders" element={<CustomerOrders/>} />
        <Route path="/shoppingcart" element={<ShoppingCart token = {this.state.token}/>} /> 
        <Route path="/customerinfo" element={<CustomerInfoPage/>} />
        <Route path="/createmenu" element={<CreateMenu token = {this.state.token}/>} /> 
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