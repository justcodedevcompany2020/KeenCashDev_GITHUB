import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { BlueButton } from '../../Components/Button.js/BlueButton';
import { styles } from './styles';

export const SendToBottomSheetModal = () =>{
    const {send} = useSelector(st=>st)
    const {getMyBalance} = useSelector((st)=>st)
    return <View style ={styles.container}>
        <View style = {{justifyContent:'center',alignItems:'center'}}>
            <Text style = {styles.title}>Send To</Text>
            <View style = {{justifyContent:'center',alignItems:'center',marginVertical:20}}>
                {/* <Text style  = {[styles.text,{color:'#4DFF7E'}]}>markmartemianov.ton</Text> */}
                <Text style = {styles.text}>{send.token}</Text>
            </View>
            <View>
                <Text style = {{fontFamily:'Lexend-Regular',fontSize:30,textAlign:"center",color:'#EAEAEA'}}>102.6847 TON</Text>
                <Text style = {styles.text}>{getMyBalance.balance} TON</Text>
            </View>
        </View>
        <View style = {{marginVertical:35}}>
            <BlueButton backgroundColor='#4DFF7E' color='#161616'  text ="Confirm" height={70} />
            <Text style = {{color:"#EAEAEA",fontFamily:'Lexend-SemiBold',fontSize:15,textAlign:'center',justifyContent:'center',alignItems:'center',marginTop:15}}>Cancel</Text>
        </View>
    </View>
}