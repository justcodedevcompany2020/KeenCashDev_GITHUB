import axios from "axios"
import { error_create_wallet } from "./errorAction"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { start_create_wallet } from "./startAction"
import { succes_create_wallet } from "./successAction"

const api_addres = 'http://3.85.188.199'
export const set_password = (password) =>{
    return {
        type:'set_password',
        password,
    }
}
export const change_header_title = (price,price_$) => {
    return {
        type:'change_header_title',
        price,
        price_$,
    }
}

export const nftInfo = (img,title,text) =>{
    return {
        type:'nftInfo',
        img,
        title,
        text,
    }
}
export const SendToken = (value) => {
    return {
        type:'send_token',
        value
    }
}
export const clear_password = () => {
    return {
        type:'clear_password'
    }
}

export  const create_wallet = () =>{
    return (dispatch) =>{
        dispatch(start_create_wallet())
        fetch(`${api_addres}/createSeed`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          })
          .then(response => response.json())
          .then((r)=>{
            dispatch(succes_create_wallet(r))
          })
          .catch((error)=>{
            dispatch(error_create_wallet())
          })

    }
}

export const checkToken = () =>{
    return {
        type:'checkToken',
    }
}

export const getTransactionHistory = (addres) =>{
    return (dispatch)=>{
        axios.get(`${api_addres}/getTransactionHistory`,{addres}).then((r)=>{
            console.log(r)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}