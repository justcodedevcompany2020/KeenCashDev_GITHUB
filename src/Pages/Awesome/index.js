import {View, Text} from 'react-native';
import { SuccessScreen } from '../../Components/SuccessScreen';
import {Gstyles} from '../../Gstyle';

export const Awesome = ({navigation}) => {
  return (
    <View style={Gstyles.wrapper}>
      <SuccessScreen
        title={'ur_awesome'}
        button_title={'To my wallet'}
        onPress={() => navigation.navigate('NavigationMenu')}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily:"Lexend-Light",
            fontSize: 15,
            color: '#fff',
            paddingHorizontal: 7,
          }}>
          500 TON was sent to
        </Text>
        <Text style = {{textAlign:'center',color:'#4DFF7E',fontSize:15,marginVertical:15,paddingHorizontal:20,fontFamily:"Lexend-Light",}}>
            EQDCAfpTMlIh6xGABPSO0oIqMgVy5ncGpq75hgeCl4-UKMY8
        </Text>
      </SuccessScreen>
    </View>
  );
};
