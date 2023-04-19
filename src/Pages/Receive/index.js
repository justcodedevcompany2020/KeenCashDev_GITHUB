import {View, Text, ScrollView} from 'react-native';
import {BlueButton} from '../../Components/Button.js/BlueButton';
import {Gstyles} from '../../Gstyle';
import {styles} from './styles';
import {Svgs} from '../../Svg';

export const Resive = () => {
  return (
    <ScrollView showsVerticalScrollIndicator = {false} style={Gstyles.home}>
      <View>
        <Text style={styles.title}>receive TON</Text>
        <Text style={[Gstyles.text, styles.text_1]}>
          Send only Toncoin (TON) to this address.Sending other coins may result
          in permanent loss.
        </Text>
        <View style={styles.view_1}>
          <Svgs title={'QRCode'} />
          <Text style={styles.text_2}>Your wallet</Text>
        </View>
        <Text style={styles.text_3}>
          EQAQxrU1G0D9-FQ3h1mO7o5qex-JJWvrAE82QnezDHqrS16B
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
