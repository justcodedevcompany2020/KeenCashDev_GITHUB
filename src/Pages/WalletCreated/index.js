import { useEffect } from 'react'
import {View,Text,StatusBar} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { SuccessScreen } from '../../Components/SuccessScreen'
import { Gstyles } from '../../Gstyle'
import { create_wallet } from '../../store/action/action'
export const WalletCreadet = ({navigation}) => {
    const {createWallet} = useSelector(r=>r)
    const dispatch = useDispatch()
    const hadnelClicl = () =>{
        dispatch(create_wallet())
    }
    useEffect(()=>{
        if(createWallet.ID){
            navigation.navigate('YourRecoveryPhrase')
        }
    },[createWallet.loading])
    return <View style = {Gstyles.wrapper}>
        <StatusBar
            backgroundColor="#000"
        />
        <SuccessScreen loading = {createWallet.loading} onPress = {()=>hadnelClicl()} title={'wallet_created'} >
            <View>
                <Text style = {[Gstyles.text,{marginBottom:10}]}>Only you control it.</Text>
                <Text style = {Gstyles.text}>Please  save  secret words carefully and set up a secure passcode.</Text>
            </View>
        </SuccessScreen>
    </View>
}