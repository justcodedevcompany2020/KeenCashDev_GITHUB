import {View,Text} from 'react-native'
import { useDispatch } from 'react-redux'
import { SuccessScreen } from '../../Components/SuccessScreen'
import {clear_password} from '../../store/action/action.js'
import { Gstyles } from '../../Gstyle'

export const WhatADay = ({navigation}) => {
    const dispatch = useDispatch()
    return <View style = {Gstyles.wrapper}>
        <SuccessScreen onPress={()=>{
            navigation.navigate('WalletCreadet')
            dispatch(clear_password())
            }} onPress2 = {()=>navigation.navigate('InportStart')} title = 'what_a_day' button_title='Create new TON wallet' opt = {'Enter 24 secret words'}>
            <Text style ={[Gstyles.text,{marginVertical:10,marginHorizontal:10}]}>Without the secret words you can’t restore access to the wallet.</Text>
            <Text style ={[Gstyles.text,{marginHorizontal:10}]}> But you can create a new secure TON wallet with keen.cash</Text>
        </SuccessScreen>
    </View>
}