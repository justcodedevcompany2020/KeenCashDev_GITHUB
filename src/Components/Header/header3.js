import {View,Text,TouchableOpacity} from 'react-native'
import { Svgs } from '../../Svg'
import { styles } from './styles'

export const Header3 = ({onPress}) => {
    return <View style = {styles.header1}>
        <View style = {{justifyContent:'space-between',flexDirection:'row'}}>
            <Text onPress={onPress} style = {styles.text}>
                {'< Back'}
            </Text>
            <Text onPress={onPress} style = {styles.text}>
                Send TON
            </Text>
            <TouchableOpacity>
                <Svgs title={'scanQR'} />
            </TouchableOpacity>
        </View>
    </View>
}