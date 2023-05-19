import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk" 
import checkAccauntReducer from './reducers/checkAccauntReducer';
import createWalletReducer from './reducers/createWalletReducer';
import getBalanceReducer from './reducers/getBalanceReducer';
import HeaderReducer from './reducers/headerReducer';
import Password from './reducers/Password';
import SendReducer from './reducers/sendReducer';
import signWithSeedReducer from './reducers/signWithSeedReducer';
import transferTonReducer from './reducers/transferTonReducer';

const rootReducer = combineReducers({
  password:Password,
  header:HeaderReducer,
  send:SendReducer,
  createWallet:createWalletReducer,
  getMyBalance:getBalanceReducer,
  signWithSeed:signWithSeedReducer,
  transfer:transferTonReducer,
  check:checkAccauntReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk) );
