import {TextInput, View, Text,TouchableOpacity} from 'react-native';
import {Svgs} from '../../Svg';
import {styles} from './style';

export const Input = ({id, height = 50, placeholder, value, onChange, x,onPress,margin =10}) => {
  return (
    <View>
      <TextInput
        onChangeText={e => onChange(e)}
        value={value}
        placeholder={placeholder}
        style={[styles.input, {height: height,paddingHorizontal:margin}]}
        multiline={true}
      />
      <Text style={styles.text}>{id}</Text>
      {x && (
        <TouchableOpacity onPress = {onPress} style = {[{right:20,position:'absolute',justifyContent:'center',alignItems:'center',height:'100%'}]}>
          <Svgs title={'x'} />
        </TouchableOpacity>
      )}
    </View>
  );
};
