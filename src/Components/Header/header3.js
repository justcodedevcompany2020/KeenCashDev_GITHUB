import {View,Text,TouchableOpacity} from 'react-native'
import { Svgs } from '../../Svg'
import { styles } from './styles'

export const Header3 = ({onPress,text = 'Send TON',onPress1}) => {
    return <View style = {styles.header1}>
        <View style = {{justifyContent:'space-between',flexDirection:'row'}}>
            <Text onPress={onPress} style = {styles.text}>
                {'< Back'}
            </Text>
            <Text onPress={onPress} style = {styles.text}>
               {text}
            </Text>
            <TouchableOpacity onPress={onPress1}>
                <Svgs title={'scanQR'} />
            </TouchableOpacity>
        </View>
    </View>
}