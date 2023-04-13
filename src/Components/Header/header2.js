import {View,Text} from 'react-native'
import { styles } from './styles'

export const Header1 = ({onPress, text }) => {
    return <View style = {styles.header1}>
        <View style = {{width:'100%',position:"relative",justifyContent:'center'}}>
            <Text onPress={onPress} style = {styles.text}>
                {'< Back'}
            </Text>
            {text && <Text onPress={onPress} style = {[styles.text ,{position:'absolute',justifyContent:'center',alignItems:'center',textAlign:'center',width:'100%'}]}>
               {text}
            </Text>}
        </View>
    </View>
}