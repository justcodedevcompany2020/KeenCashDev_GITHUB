import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk" 
import HeaderReducer from './reducers/headerReducer';
import Password from './reducers/Password';

const rootReducer = combineReducers({
  password:Password,
  header:HeaderReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk) );
