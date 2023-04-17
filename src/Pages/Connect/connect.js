import { View, Text, ScrollView ,Image} from 'react-native';
import { styles } from './styles';
import { BlueButton } from '../../Components/Button.js/BlueButton';
import img from '../../img/2.png'
export const ConnectModal = () => {
return <ScrollView style ={styles.container}>
    <View style = {{justifyContent:'center',alignItems:'center'}}>
        <Image source={img} style = {{borderRadius:20}} />
        <Text style = {styles.title}>Connect to Fragment</Text>
        <Text  style = {styles.title}>fragment.io 
        <Text style = {{color:'#8A8A8A',fontSize:15,fontFamily:"Lexend-Light", textAlign:'center'}}> is requesting access to your wallet address v4R2</Text></Text>
        <Text style = {{marginVertical:20,alignItems:'center',textAlign:'center',color:'#EAEAEA'}}>EQDCAfpTMlIh6xGABPSO0oIqMgVy5ncGpq75hgeCl4-UKMY8</Text>
    </View>
    <BlueButton text = {'Connect my wallet'} color ='#161616' height={70} backgroundColor = '#4DFF7E' />
    <View>
        <Text style = {{color:'#8A8A8A',fontSize:12,fontFamily:"Lexend-Light",textAlign:'center',marginVertical:20}}>Be sure to check the service address before connecting the wallet.</Text>
    </View>
</ScrollView>
}