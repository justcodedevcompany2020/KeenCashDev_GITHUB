import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk" 
import createWalletReducer from './reducers/createWalletReducer';
import getBalanceReducer from './reducers/getBalanceReducer';
import HeaderReducer from './reducers/headerReducer';
import Password from './reducers/Password';
import SendReducer from './reducers/sendReducer';
import signWithSeedReducer from './reducers/signWithSeedReducer';

const rootReducer = combineReducers({
  password:Password,
  header:HeaderReducer,
  send:SendReducer,
  createWallet:createWalletReducer,
  getMyBalance:getBalanceReducer,
  signWithSeed:signWithSeedReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk) );
