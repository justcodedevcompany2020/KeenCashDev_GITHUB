import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk" 
import HeaderReducer from './reducers/headerReducer';
import Password from './reducers/Password';
import SendReducer from './reducers/sendReducer';

const rootReducer = combineReducers({
  password:Password,
  header:HeaderReducer,
  send:SendReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk) );
