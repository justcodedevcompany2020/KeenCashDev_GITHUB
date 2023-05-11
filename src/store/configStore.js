import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk" 
import createWalletReducer from './reducers/createWalletReducer';
import getBalanceReducer from './reducers/getBalanceReducer';
import HeaderReducer from './reducers/headerReducer';
import Password from './reducers/Password';
import SendReducer from './reducers/sendReducer';

const rootReducer = combineReducers({
  password:Password,
  header:HeaderReducer,
  send:SendReducer,
  createWallet:createWalletReducer,
  getMyBalance:getBalanceReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk) );
