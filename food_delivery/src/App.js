import React from 'react';
import FrontPage from './components/FrontPage/FrontPage';
import data from './restaurantsMenu.json'
import './App.css';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/Sign-In';
import SignUpCustomer from './components/SignUpCustomer/Sign-Up-Customer';

function App() {
  return (
    <div>
      <FrontPage></FrontPage>
    </div>
  )
}

export default App;

/*import './App.css';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/Sign-In';
import FrontPage from './components/FrontPage/FrontPage';
import React from 'react';
import restaurantsMenu from './RestaurantsMenu.json';

class App extends React.Component {
constructor(props)
{
  super(props)
  this.state =  { restaurants: restaurantsMenu.restaurants,  //Saves data from the json file in an array
    itemSearchString: "",             //String that is modified according to the given value on the search bar
    selectedItem: ""
    
    
}

}

onSearchChange = (event) => {                              //handles the event when something is typed on the search bar
this.setState({itemSearchString: event.target.value})     //puts the given value into the string
}

render()
{
return (
  <div className="App">
  <Header onSearchChange = {this.onSearchChange} itemSearchString = {this.state.itemSearchString}/>
  <FrontPage restaurants={this.state.restaurants.filter(             //filters items based on the string value and sends them as props
    (restaurants) => restaurants.name.includes(this.state.itemSearchString))}/>  
  </div>
);
}
}

export default App;*/

