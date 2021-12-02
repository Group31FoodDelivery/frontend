import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose,combineReducers } from 'redux';


const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: {},
    cart: {},
    order: {},
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;