import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/Sign-In';
<<<<<<< Updated upstream
import SignUpCustomer from './components/SignUpCustomer/Sign-Up-Customer';
=======
import FrontPage from './components/FrontPage/FrontPage';
import SignUpCustomer from "./components/SignUpCustomer/Sign-Up-Customer";
import MenuPage from "./components/MenuPage/MenuPage";
import React from 'react';
import data from './restaurants.json';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
    <Header></Header>
    <SignIn></SignIn>
    </div>
<<<<<<< Updated upstream
  );
=======
    <div>
      <Routes> 
        <Route path="/" element={<FrontPage restaurants={this.state.restaurants.filter( //filters items based on the string value and sends them as props
     (restaurants) => restaurants.name.includes(this.state.itemSearchString))}/>  } />
        <Route path="/register" element={<SignUpCustomer/>} />
        <Route path="/login" element={<MenuPage/>} /> {/* here should be <SignIn/> */}
        
        <Route path="/menu" element={<MenuPage/>} />

    

      </Routes>
    
    

   </div>
</BrowserRouter>


);
}
>>>>>>> Stashed changes
}

export default App;
