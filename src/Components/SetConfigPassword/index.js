import {View, Text,  TouchableOpacity} from 'react-native';
import {useState,  useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux'
import {Gstyles} from '../../Gstyle';
import {Svgs} from '../../Svg';
import {styles} from './styles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { set_password } from '../../store/action/action';

export const SetConfigPassword = ({title, text, options,navigation,action}) => {
  const [count, setCount] = useState(4);
  const [enableMask, setEnableMask] = useState(true);
  const [value, setValue] = useState('');
  const [opt, setOpt] = useState(false);
  const dispatch = useDispatch()
  const {password} = useSelector((st)=>st)
  const [match,setMatch] = useState(true)
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;
    let color = false;
    if (symbol) {
      color = true;
      textChild = enableMask ? '•' : symbol;
    } else if (isFocused) {
      textChild = <Cursor />;
    }
    return (
      <Text
        key={index}
        style={[styles.cell, color && styles.focusCell, !match && {borderColor:'red'}]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };
  const ref = useBlurOnFulfill({value, cellCount: count});
  const ref2 = useBlurOnFulfill({});
  useEffect(()=>{
    if(password.password.length){
      setCount(password.password.length)
    }
    else {
      setCount(4)
    }
  },[password])
  useEffect(()=>{
    if(value.length === count){
        if(action === 'set'){
          dispatch(set_password(value))
          navigation.navigate('ConfirmPassword')
        }
        else if(value == password.password){
          navigation.navigate('WellDone')
        }
        else if(value != password.password){
          setValue('')
          setMatch(false)
        }
    }
  },[value])
  return (
    <View style={[Gstyles.wrapper, Gstyles.wrapper2]}>
      <View>
        <Svgs title={title} />
        <Text style={[Gstyles.text, {marginTop: 10}]}>{text}</Text>
      </View>
      <View style={styles.password_continer}>
        {!opt ? (
          <CodeField
            autoFocus={true}
            ref={!match ?ref:ref2}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={count}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />
        ) : (
          <View style={{alignItems: 'center'}}>
            <View style={styles.opt}>
              <TouchableOpacity
                style={[
                  styles.touchableOpacity,
                  {borderBottomWidth: 1, borderColor: '#C8C7CB'},
                ]}
                onPress={() => {
                  setCount(4);
                  setValue('')
                  setOpt(false);
                }}>
                <Text style={styles.text}>4-digit code</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={() => {
                  setCount(6);
                  setValue('')
                  setOpt(false);
                }}>
                <Text style={styles.text}>6-digit code</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      <View>
        <Text
          onPress={() => setOpt(true)}
          style={[Gstyles.text, {fontWeight: 600}]}>
          {options}
        </Text>
      </View>
    </View>
  );
};
