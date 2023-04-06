import {TouchableOpacity,Text} from 'react-native'
import { styles } from './styles'
export const Button = ({title ,onPress,color = '#161616',Bgcolor = '#4DFF7E'}) => {
    return <TouchableOpacity onPress={onPress} style = {[styles.button,{backgroundColor:Bgcolor}]}>
        <Text style = {[styles.button_text,{color:color}]}>{title}</Text>
    </TouchableOpacity>
}