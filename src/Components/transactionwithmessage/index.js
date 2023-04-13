import {useState} from 'react'
import {View,Text,TouchableOpacity} from 'react-native';
import { BlueButton } from '../Button.js/BlueButton';
import { styles } from './styles';
export const TransactionWithMessage = ({text,navigation}) =>{
    const [show,setShow] = useState(false)
    return <View >
        <TouchableOpacity style = {styles.block} onPress ={()=>setShow(!show)}>
            <Text style = {styles.text}>{text}</Text>
        </TouchableOpacity>
        {show &&
            <View>
                <Text style  = {styles.text}>25 March, 2023 at 22:52</Text>
                <Text style  = {styles.text}>Wallet address: EQDCAfpTMlIh6xGABPSO0oIqMgVy5ncGpq75hgeCl4-UKMY8</Text>
                <Text  style  = {[styles.text,{marginBottom:20}]}>0.000065732 transaction fee</Text>
                <BlueButton onPress={()=>navigation.navigate('SendTo')} svg={'vector1'} height={50} color ={'Retry transaction'} text = {'Send TON to this address'} />
                <Text  style = {{color:'#EAEAEA',fontWeight:600,textAlign:'center',marginVertical:20}}>View in Tonscan ></Text>
            </View>
        }
    </View>
}