import { View,Text,TouchableOpacity } from "react-native"
import { Svgs } from "../../Svg"
import { BlueButton } from "../Button.js/BlueButton"
import { styles } from "./styles"

export const SuccessScreen = ({children,title,onPress,button_title='Proceed to secret words',opt,onPress2,close,closePress,loading=false}) => {
    return <View style = {styles.success_screen}>
        <View></View>
        <View>
            <View style = {{marginBottom:10,alignItems:'center'}}>
                <Svgs title={title} />
            </View>
            {children}
        </View>
        <View style = {{marginBottom:40}}>
            <BlueButton 
                backgroundColor="#4DFF7E"
                color="#161616"
                onPress ={onPress} title={button_title}
                loading = {loading}
                height = {50}
                text = {button_title}
            />
            <View style = {{justifyContent:'center',alignItems:'center',marginTop:20}}>
        {close && <TouchableOpacity   onPress = {closePress} style = {{backgroundColor:'#313131',justifyContent:'center',width:200,height:50,borderRadius:15,alignItems:'center'}}>
            <Text style = {{color:"#FFFFFF",fontFamily:'Lexend-SemiBold',fontSize:15}}>Close</Text>
        </TouchableOpacity>}
           {opt&& <View>
                <Text onPress={onPress2} style = {styles.opt}>{opt}</Text>
            </View>}
        </View>
        </View>
        
    </View>
}