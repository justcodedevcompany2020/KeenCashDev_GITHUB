import {View,Text} from 'react-native'
import { Gstyles } from '../../Gstyle'

export const Notifications = () => {
        return <View style = {[Gstyles.wrapper,Gstyles.wrapper2,{alignItems:'center',}]}>
        <Text style = {{color:'#EAEAEA',fontFamily:'Lexend-SemiBold',fontSize:20,textAlign:'center',paddingHorizontal:40}}>System Push-notifications Alert</Text>
    </View>
}