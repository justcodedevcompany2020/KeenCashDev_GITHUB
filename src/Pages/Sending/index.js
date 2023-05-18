import { View,Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import {useEffect} from 'react'
import { SuccessScreen } from "../../Components/SuccessScreen"
import { Gstyles } from "../../Gstyle"
import { transfer_ton } from "../../store/action/action"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const Sending = ({navigation}) => {
    const dispatch = useDispatch()
    const {transfer}  =  useSelector(st=>st)
    const {send} = useSelector(st=>st)
    useEffect(()=>{
        transferTon()
    },[])
    useEffect(()=>{
        if(transfer.status)
        navigation.navigate('Awesome')
    },[transfer.status])
    const transferTon = async() =>{
        const id = await AsyncStorage.getItem('token')
        dispatch(transfer_ton({
            senderAddress:transfer.address,
            accountID:id,
            amount:transfer.balance,
            comment:transfer.comment,
            recipientAddress:send.token
        }))
    }
    return  <View style = {Gstyles.wrapper}>
    <SuccessScreen title={'sending'} button_title = {'To my wallet'}onPress ={()=>navigation.navigate('NavigationMenu')} >
        <Text style = {{textAlign:'center',fontFamily:'Lexend-Light',fontSize:15,color:'#fff',paddingHorizontal:7}}>Please wait a few seconds for your transaction to be processed…</Text>
    </SuccessScreen>

    </View>
}