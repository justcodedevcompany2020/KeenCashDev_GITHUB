import {TextInput,View,Text} from 'react-native'
import { styles } from './style'

export const Input = ({id}) => {
    return <View >
        <TextInput style = {styles.input} />
        <Text style = {styles.text}>{id}.</Text>
    </View>
}