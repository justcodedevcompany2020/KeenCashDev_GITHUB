import {View,Text} from 'react-native';
import { styles } from './styles';
export const TransactionWithMessage = ({text}) =>{
    return <View style = {styles.block}>
        <Text style = {styles.text}>{text}</Text>
    </View>
}