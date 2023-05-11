import { View,Text } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BlueButton } from "../../Components/Button.js/BlueButton"
import { Gstyles } from "../../Gstyle"
import { Svgs } from "../../Svg"
import { useDispatch } from "react-redux";
import { clear_password } from "../../store/action/action";

export const MoreWallet = ({navigation}) => {
    const dispatch = useDispatch()
    const WalletCreadet = async() =>{
        await AsyncStorage.setItem('passcode','')
        await AsyncStorage.setItem('token','')
        await AsyncStorage.setItem('addres','')
        navigation.navigate('WalletCreadet')
    }
    return <View style = {[Gstyles.homeWrapper,{justifyContent:'center'}]}>
        <View style = {{alignItems:'center'}}>
            <Svgs title={'more_wallet'}/>
            <Text style = {[Gstyles.text,{marginVertical:20}]}>
                Sure thing! You can add more TON wallets.Uh, why don’t others have this?
            </Text>
        </View>
        <View>
            <BlueButton  onPress={()=>WalletCreadet()}  height={70} text = 'Create new TON wallet' />
            <Text onPress={()=>{
                navigation.navigate('InportStart')
                dispatch(clear_password())
            }} style = {{color:'#FFFFFF',textAlign:'center',marginTop:20,fontSize:15,fontFamily:'Lexend-SemiBold'}}>Import existing TON wallet</Text>
        </View>
    </View>
}