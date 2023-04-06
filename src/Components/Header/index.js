import {View,Text} from 'react-native'
import { styles } from './styles'

export const Header = ({onPress}) => {
    return <View style = {styles.header}>
        <Text onPress={onPress} style = {styles.text}>
            {'< Back'}
        </Text>
    </View>
}