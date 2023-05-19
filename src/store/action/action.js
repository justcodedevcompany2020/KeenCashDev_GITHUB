import axios from 'axios';
import {error_check_account, error_create_wallet, error_get_accaunt, error_get_balance, error_seed_white_seed} from './errorAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {start_check_account, start_create_wallet, start_get_accaunt, start_get_balance, start_seed_white_seed} from './startAction';
import {success_check_accaunt, success_get_balance, success_seed_white_seed, succes_check_account, succes_create_wallet, succes_transfer_ton} from './successAction';

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
      dispatch(success_get_balance(r.data.balance))
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
export const snedTon = (address) =>{
  return {
    type:'snedTon',
    address,
  }
}
export const send_balance = (data) =>{
  return {
    type:'send_balance',
    data,
  }
}
export const send_comment = (data) =>{
    return {
      type:'send_comment',
      data
    }
}
export const transfer_ton = (data) =>{
  return (dispatch) =>{
    axios.post(`${api_addres}/transferTON`,data).then((r)=>{
      dispatch(succes_transfer_ton())
    }).catch((error)=>{
      console.log(error )
    })
  }
}
export const check_accaunt = (addres) =>{
  return (dispatch) =>{
    dispatch(start_check_account())
    axios.post(`${api_addres}/checkAccount`,{address:addres}).then((r)=>{
      dispatch(succes_check_account())
    })
    .catch((error)=>{
      dispatch(error_check_account())
    })
  }
}
export const clear_error_check_account = () =>{
  return {
    type:'clear_error_check_account'
  }
}

export const get_accaunt = (id) =>{
  return (dispatch) =>{
    dispatch(start_get_accaunt())
    axios.post(`${api_addres}/getAccounts`,{id:id}).then((r)=>{
      if(r.data){
        let arr =[]
        r.data.map((elm,i)=>{
          arr.push(elm.address)
        })
          setAddress(arr)
      }
      dispatch(success_check_accaunt(r.data))
    })
    .catch((error)=>{
      dispatch(error_get_accaunt())
    })
  }
}

const  setAddress = async(arr) =>{
  await AsyncStorage.setItem('addres',JSON.stringify(arr)) 
}