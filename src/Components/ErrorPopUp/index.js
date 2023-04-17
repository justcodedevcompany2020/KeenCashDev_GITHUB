import { View ,Text} from "react-native"
import { Svgs } from "../../Svg"
import { styles } from "./styles"

export const ErrorPopUp =() =>{
    return <View style = {styles.modal}>
        <View style = {{marginRight:20}}>
            <Svgs title={'error'} />
        </View>
        <View style = {{justifyContent:'center'}}>
            <Text style = {{color:'#161616',fontFamily:'Lexend-Regular',fontSize:13}}>Invalid address</Text>
            <Text style = {{color:'#161616',fontFamily:'Lexend-Light',fontSize:12,marginTop:-2}}>Address entered does not belong to TON</Text>
        </View>
    </View>
}