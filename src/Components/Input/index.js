import {TextInput,View,Text} from 'react-native'
import { styles } from './style'

export const Input = ({id,height =50,placeholder,value,onChange}) => {
    return <View >
        <TextInput onChangeText={(e)=>onChange(e)} value={value} placeholder={placeholder} style = {[styles.input,{height:height}]} />
        <Text style = {styles.text}>{id}.</Text>
    </View>
}