//all state data stored in here
import {createStore} from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

export default store;