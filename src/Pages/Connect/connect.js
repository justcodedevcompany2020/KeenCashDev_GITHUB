import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';
import { Svgs } from '../../Svg';
import { BlueButton } from '../../Components/Button.js/BlueButton';
export const ConnectModal = () => {
return <View style ={styles.container}>
    <View style = {{justifyContent:'center',alignItems:'center'}}>
        <Svgs title={'connect'} />
        <Text style = {{color:'#EAEAEA',marginVertical:10,fontWeight:500,fonSize:20}}>Connect to Fragment</Text>
        <Text  style = {{color:'#EAEAEA',marginVertical:10,fontWeight:500,fonSize:20}}>fragment.io 
        <Text style = {{color:'#8A8A8A',fontSize:15,fontWeight:300, textAlign:'center'}}> is requesting access to your wallet address v4R2</Text></Text>
        <Text style = {{marginVertical:20,alignItems:'center',textAlign:'center'}}>EQDCAfpTMlIh6xGABPSO0oIqMgVy5ncGpq75hgeCl4-UKMY8</Text>
    </View>
    <BlueButton text = {'Connect my wallet'} color ='#161616' height={70} backgroundColor = '#4DFF7E' />
    <View>
        <Text style = {{color:'#8A8A8A',fontSize:12,fontWeight:300,textAlign:'center',marginVertical:20}}>Be sure to check the service address before connecting the wallet.</Text>
    </View>
</View>
}