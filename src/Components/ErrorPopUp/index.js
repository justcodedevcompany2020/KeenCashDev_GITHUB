import { Modal, View ,Text} from "react-native"
import {  } from "react-native-svg"
import { Svgs } from "../../Svg"
import { styles } from "./styles"

export const ErrorPopUp =({visible}) =>{
    console.log(visible)
    return <View style = {styles.modal}>
        <View style = {{marginRight:20}}>
            <Svgs title={'error'} />
        </View>
        <View style = {{justifyContent:'center'}}>
            <Text style = {{color:'#161616',fontWeight:400,fontSize:13}}>Invalid address</Text>
            <Text style = {{color:'#161616',fontWeight:300,fontSize:12,marginTop:-2}}>Address entered does not belong to TON</Text>
        </View>
    </View>
}