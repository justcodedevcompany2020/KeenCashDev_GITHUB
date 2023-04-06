import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk" 
import Password from './reducers/Password';

const rootReducer = combineReducers({
  password:Password,
});

export const store = createStore(rootReducer, applyMiddleware(thunk) );
