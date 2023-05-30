import {View, Text, ScrollView} from 'react-native';
import {BlueButton} from '../../Components/Button.js/BlueButton';
import {Gstyles} from '../../Gstyle';
import {styles} from './styles';
import {Svgs} from '../../Svg';
import QRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux';


export const Resive = () => {
  const {send} = useSelector((st)=>st)
  console.log(send.activeAdress)
  return (
    <ScrollView showsVerticalScrollIndicator = {false} style={Gstyles.home}>
      <View>
        <Text style={styles.title}>receive TON</Text>
        <Text style={[Gstyles.text, styles.text_1]}>
          Send only Toncoin (TON) to this address.Sending other coins may result
          in permanent loss.
        </Text>
        <View style={styles.view_1}>
          <View style = {{width:210,backgroundColor:'white',justifyContent:'center',alignItems:'center',height:210,borderRadius:14}}>
            <QRCode 
              value={send.activeAdress}
              size={180}
              backgroundColor="white"
            />
          </View>
          <Text style={styles.text_2}>Your wallet</Text>
        </View>
        <Text style={styles.text_3}>
          {send.activeAdress}
        </Text>
        <View style={{marginVertical: 30}}>
          <BlueButton
            svg={'share'}
            backgroundColor="#4DFF7E"
            color="#161616"
            text="Share wallet"
            height={50}
          />
        </View>
      </View>
    </ScrollView>
  );
};
