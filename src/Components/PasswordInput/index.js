import {View,Text,TextInput} from 'react-native'
import {useState,useRef} from 'react'
import { styles } from './style'

export const PasswordInput = ({id,useRef,useRef1}) => {
  
    return <TextInput  
        ref={useRef} 
        maxLength = {1} 
        style = {styles.input} 
        onChangeText={() => {
            useRef1.current.focus();
        }}
    />

}