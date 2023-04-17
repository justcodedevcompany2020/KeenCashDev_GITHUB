import { View,Text } from 'react-native';
import {useEffect} from 'react'
import {  } from 'react-native-gesture-handler';
import { Gstyles } from '../../Gstyle';
import { SuccessScreen } from '../SuccessScreen';

export const PremissionAcces = ({navigation,permision}) =>{
    useEffect(()=>{
        permision(false)
    },[])
    return <View style={Gstyles.wrapper}>
        <SuccessScreen 
            title={'no_permisoin'}
            button_title={'Go to Settings'}
            onPress = {()=>navigation.navigate('Settings')}
            closePress = {()=>navigation.navigate('Main')}
            close 
        >
            <Text style = {{fontSize:15,fontFamily:'Lexend-Light',color:'#FFFFFF',paddingHorizontal:40,textAlign:'center'}}>TON Wallet doesn’t have access to the camera. Please enable camera access to scan QR codes.</Text>
        </SuccessScreen>
       
    </View>
}
// cc