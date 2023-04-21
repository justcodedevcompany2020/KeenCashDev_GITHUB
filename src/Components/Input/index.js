import { useRef } from 'react';
import {TextInput, View, Text,TouchableOpacity} from 'react-native';
import {Svgs} from '../../Svg';
import {styles} from './style';

export const Input = ({font,handelSubmit,multiline = true,active,id, height = 50, placeholder, value, onChange, x,onPress,margin =10,ref}) => {

  return (
    <View>
      <TextInput
        onChangeText={e => onChange(e)}
        value={value}
        autoFocus = {active}
        placeholder={placeholder}
        style={[styles.input, {height: height,paddingHorizontal:margin}, font!=='' && {fontFamily:font} ]}
        multiline={multiline}
        ref ={ref}
        onSubmitEditing = {handelSubmit}
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
