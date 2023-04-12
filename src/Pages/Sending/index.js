import { View,Text } from "react-native"
import { SuccessScreen } from "../../Components/SuccessScreen"
import { Gstyles } from "../../Gstyle"

export const Sending = ({navigation}) => {
    return  <View style = {Gstyles.wrapper}>
    <SuccessScreen title={'sending'} button_title = {'To my wallet'}onPress ={()=>navigation.navigate('NavigationMenu')} >
        <Text style = {{textAlign:'center',fontWeight:300,fontSize:15,color:'#fff',paddingHorizontal:7}}>Please wait a few seconds for your transaction to be processed…</Text>
    </SuccessScreen>

    </View>
}