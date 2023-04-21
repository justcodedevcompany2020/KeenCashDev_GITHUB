import {useState} from 'react'
import {View,Text,TouchableOpacity} from 'react-native';
import { BlueButton } from '../Button.js/BlueButton';
import { styles } from './styles';
export const TransactionWithMessage = ({text,navigation}) =>{
    const [show,setShow] = useState(false)
    return <View >
        <TouchableOpacity  style = {[styles.block,text.length*2 <100 ?{width:(`${text.length*2.3}%`)}:{width:'100%'}]} onPress ={()=>setShow(!show)}>
            <Text onPress ={()=>setShow(!show)} style = {[styles.text]}>{text}</Text>
        </TouchableOpacity>
        {show &&
            <View>
                <Text style  = {styles.text}>25 March, 2023 at 22:52</Text>
                <Text style  = {styles.text}>Wallet address: EQDCAfpTMlIh6xGABPSO0oIqMgVy5ncGpq75hgeCl4-UKMY8</Text>
                <Text  style  = {[styles.text,{marginBottom:20}]}>0.000065732 transaction fee</Text>
                <View>
                <BlueButton 
                    onPress={()=>navigation.navigate('SendTo')} 
                    svg={'vector1'} 
                    height={50} 
                    color ={'#EAEAEA'} 
                    text = {'Send TON to this address'} 
                    />
                <Text  style = {{color:'#EAEAEA',fontFamily:'Lexend-SemiBold',textAlign:'center',marginVertical:25}}>View in Tonscan {'>'}</Text>
                </View>
            </View>
        }
    </View>
}