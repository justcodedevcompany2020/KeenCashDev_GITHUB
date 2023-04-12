import {TouchableOpacity,Text,View,ActivityIndicator} from 'react-native'
import { styles } from './styles'

import { Svgs } from '../../Svg'
export const BlueButton = ({text,width,height,svg,backgroundColor='#2400FF',color='#EAEAEA',onPress,loading}) => {
        return <TouchableOpacity disabled = {loading} onPress = {onPress} style = {[{width:width,height:height,backgroundColor:backgroundColor},styles.blue_button]}>
        <View style = {styles.text_wrapper}>
           {svg && <Svgs title={svg}/>}
            {loading &&  <ActivityIndicator size="small" color="#000" />}
            <Text style = {[styles.blue_button_text,{color:color}]}>{text}</Text>
        </View>
    </TouchableOpacity>
}