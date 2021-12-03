//all state data stored in here
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const savedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState')) //makes sure the taken data is in a JSON form
                       : {}

const store = createStore(rootReducer, savedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState())); //Saves the state in local storage everytime action is dispatched
  console.log(savedState);
})


export default store;