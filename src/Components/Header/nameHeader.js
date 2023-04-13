import {View,Text} from 'react-native'
import { styles } from './styles'

export const NameHEader = ({onPress,name}) => {
    
    return <View style = {styles.header1}>
        <View >
            <Text onPress={onPress} style = {[styles.text,{textAlign:'center',justifyContent:'center',alignItems:'center'}]}>
                 {name}
            </Text>
        </View>
    </View>
}