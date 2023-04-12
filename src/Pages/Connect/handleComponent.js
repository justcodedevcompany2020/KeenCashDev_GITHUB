import { TouchableOpacity, View } from "react-native"
import {  } from "react-native-gesture-handler"
import { Svgs } from "../../Svg"

export const HandleComponent = ({onPress}) => {
    return <View style = {{backgroundColor:'#161616',borderColor:"#161616",borderWidth:1,alignItems:'flex-end',paddingHorizontal:10,paddingTop:5}}>
        <TouchableOpacity  onPress = {onPress} >
            <Svgs title = {'handle_close'} />
        </TouchableOpacity>
    </View>
}