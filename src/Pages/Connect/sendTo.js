import { View, Text, StyleSheet } from 'react-native';
import { BlueButton } from '../../Components/Button.js/BlueButton';
import { styles } from './styles';

export const SendToBottomSheetModal = () =>{
    return <View style ={styles.container}>
        <View style = {{justifyContent:'center',alignItems:'center'}}>
            <Text style = {styles.title}>Send To</Text>
            <View style = {{justifyContent:'center',alignItems:'center',marginVertical:20}}>
                <Text style  = {[styles.text,{color:'#4DFF7E'}]}>markmartemianov.ton</Text>
                <Text style = {styles.text}>EQDCAfpTMlIh6xGABPSO0oIqMgVy5ncGpq75hgeCl4-UKMY8</Text>
            </View>
            <View>
                <Text style = {{fontWeight:400,fontSize:30,textAlign:"center",color:'#EAEAEA'}}>102.6847 TON</Text>
                <Text style = {styles.text}>≈ 0.007 fee</Text>
            </View>
        </View>
        <View style = {{marginVertical:35}}>
            <BlueButton backgroundColor='#4DFF7E' color='#161616'  text ="Confirm" height={70} />
            <Text style = {{color:"#EAEAEA",fontWeight:600,fontSize:15,textAlign:'center',justifyContent:'center',alignItems:'center',marginTop:15}}>Cancel</Text>
        </View>
    </View>
}