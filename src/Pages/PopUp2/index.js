import { View } from "react-native"
import { PopUp } from "../../Components/PopUp"
import { Gstyles } from "../../Gstyle"

export const PopUp2 = ({navigation}) =>{
    return <View  style = {[Gstyles.wrapper,{justifyContent:'center',alignItems:'center'}]}>
        <PopUp 
            onPress = {()=>navigation.navigate('YourRecoveryPhrase')} 
            title = {'Sure done?'} 
            text = {'You didn’t have enough time to write these words down.'} 
            button_text ={'Ok, sorry'} 
            text_2 = {'Skip anyway'}
            onPress1 ={()=>navigation.navigate('SecurityNerdCheck')}
        />
    </View>
}