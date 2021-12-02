//connected to store
import { combineReducers } from "redux";
import shopReducer from './Shopping/shopping-reducer';
import counterReducer from './counterSlice';


//where all the different reducers go
const rootReducer = combineReducers({
    shop: shopReducer,
    counter: counterReducer
});

// const rootCounter= combineReducers({
//   reducer: {
//     counter: counterReducer
//   }
// })

export default rootReducer;
