import {View,Text} from 'react-native'
import { styles } from './styles'

export const Header1 = ({onPress}) => {
    return <View style = {styles.header1}>
        <View >
            <Text onPress={onPress} style = {styles.text}>
                {'< Back'}
            </Text>
        </View>
    </View>
}