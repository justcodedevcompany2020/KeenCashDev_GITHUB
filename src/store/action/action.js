import axios from 'axios';
import {error_create_wallet, error_get_balance, error_seed_white_seed} from './errorAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {start_create_wallet, start_get_balance, start_seed_white_seed} from './startAction';
import {success_get_balance, success_seed_white_seed, succes_create_wallet} from './successAction';

const api_addres = 'http://3.85.188.199';
export const set_password = password => {
  return {
    type: 'set_password',
    password,
  };
};
export const change_header_title = (price, price_$) => {
  return {
    type: 'change_header_title',
    price,
    price_$,
  };
};

export const nftInfo = (img, title, text) => {
  return {
    type: 'nftInfo',
    img,
    title,
    text,
  };
};
export const SendToken = value => {
  return {
    type: 'send_token',
    value,
  };
};
export const clear_password = () => {
  return {
    type: 'clear_password',
  };
};

export const create_wallet = () => {
  return dispatch => {
    dispatch(start_create_wallet());
    fetch(`${api_addres}/createSeed`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => response.json())
      .then(r => {
        dispatch(succes_create_wallet(r));
      })
      .catch(error => {
        dispatch(error_create_wallet());
      });
  };
};

export const checkToken = () => {
  return {
    type: 'checkToken',
  };
};

export const getBalance = (address) => {
  return (dispatch) => {
    dispatch(start_get_balance())
    axios.post('http://3.85.188.199/checkBalance',{address:address})
    .then((r)=>{
      dispatch(success_get_balance(r.data.balance?.slice(0, -4)))
    })
    .catch((error)=>{
      dispatch(error_get_balance())
    })
  }
}

export const sign_With_Seed = (seed,id) =>{
  return (dispatch) => {
    dispatch(start_seed_white_seed())
    axios.post(`${api_addres}/signWithSeed`,{id:id,Seed:seed}).then((r)=>{
      dispatch(success_seed_white_seed(r.data))
    })
    .catch((error)=>{
      dispatch(error_seed_white_seed())
    })
  }
}
export const close_seed_popOp = () =>{
  return {
    type:'close_seed_popOp'
  }
}