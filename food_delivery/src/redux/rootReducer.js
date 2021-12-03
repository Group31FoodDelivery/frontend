//connected to store
import { combineReducers } from "redux";
import shopReducer from './Shopping/shopping-reducer'

//where all the different reducers go
const rootReducer = combineReducers({
    shop: shopReducer 
});

export default rootReducer;
