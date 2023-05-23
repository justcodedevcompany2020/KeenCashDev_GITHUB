import React from 'react'
import { View } from "react-native"
import { SetConfigPassword } from "../../Components/SetConfigPassword"

export  const SetPasswordForImport = ({navigation}) => {
    
    return <View >
        <SetConfigPassword
            action={'set'} 
            navigation ={navigation} 
            options={'Passcode options'} 
            title={'set_password'}
            type = {'SetConfigPassword'} 
        />
    </View>
}