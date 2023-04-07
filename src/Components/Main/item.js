import { View,Text } from "react-native"
import { TransactionWithMessage } from "../transactionwithmessage"
import { styles } from "./style"

export default Item = ({plus,price,date,from,token}) => {
    return <View style = {styles.item}>
        <View style = {styles.plus_date}>
            <Text style = {[styles.plus_minus,{color:(plus?"#4DFF7E":'#FF372B')}]}>{price}</Text>
            <Text style = {styles.date}>{date}</Text>
        </View>
        <View style = {styles.token_text_wrapper}>
            <Text style = {styles.token}>{from?'from':'to'}</Text>
            <Text style = {[styles.token,{width:'85%'}]}>{token}</Text>
        </View>
        <TransactionWithMessage text = {'transaction with message'}/>
    </View>
}