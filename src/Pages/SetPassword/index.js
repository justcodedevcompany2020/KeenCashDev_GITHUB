import React from 'react'
import { View } from "react-native"
import { SetConfigPassword } from "../../Components/SetConfigPassword"

export  const SetPassword = ({navigation}) => {
    
    return <View >
        <SetConfigPassword
            action={'set'} 
            navigation ={navigation} 
            options={'Passcode options'} 
            title={'set_password'} 
        />
    </View>
}