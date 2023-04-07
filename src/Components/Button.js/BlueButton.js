import {TouchableOpacity,Text,View} from 'react-native'
import { styles } from './styles'

import { Svgs } from '../../Svg'
export const BlueButton = ({text,width,height,svg}) => {
    return <TouchableOpacity style = {[{width:width,height:height},styles.blue_button]}>
        <View style = {styles.text_wrapper}>
           {svg && <Svgs title={svg}/>}
            <Text style = {styles.blue_button_text}>{text}</Text>
        </View>
    </TouchableOpacity>
}