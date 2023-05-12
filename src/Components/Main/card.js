import { View,Text,TouchableOpacity } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {styles} from './style';
import { Svgs } from '../../Svg';

export const Card = ({price,price_$,token}) => {
  return (
    <View style={styles.card}>
      <View style={styles.price_wrapper}>
        <Text style={[styles.price, {marginBottom: -8}]}>{price}</Text>
        {/* {price_$ !=0 ?
        <Text style={[styles.price_$]}> ≈ ${price_$}</Text>
          :
        <Text style={[styles.price_$]}>  ${price_$}</Text>
        } */}
      </View>
      <View style={styles.token_wrapper}>
        <Text style={[styles.price_$, {width: '80%'}]}>{token}</Text>
        {token && (
          <TouchableOpacity onPress={() => Clipboard.setString(token)}>
            <Svgs title={'copy'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
