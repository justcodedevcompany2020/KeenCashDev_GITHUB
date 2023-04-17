import {View, Text,Switch,KeyboardAvoidingView, } from 'react-native';
import {useState,  useEffect,useRef} from 'react';
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
import {  clear_password, set_password } from '../../store/action/action';
import { PopUp } from '../PopUp';
import {  } from 'react-native-gesture-handler';

export const SetConfigPassword = ({title, text, options,navigation,action,Passwordcount}) => {
  const [count, setCount] = useState(4);
  const [enableMask] = useState(true);
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  const {password} = useSelector((st)=>st)
  const [open,setOpen] = useState(false)
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
    }
    return (
      <Text
        key={index}
        ref = {ref1}
        style={[styles.cell, color && styles.focusCell, !match && {borderColor:'red'}]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };
  const [constErrorPassword,setConstErrorPassword] = useState(0)
  const [isEnabled, setIsEnabled] = useState(false);
  const [active,setActive] = useState(true)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const ref = useBlurOnFulfill({value, cellCount: count});
  const ref2 = useBlurOnFulfill({});
  const ref1 = useRef()
  useEffect(()=>{
    setActive(false)
    setTimeout(() => {
      setActive(true)
        // ref1.current.focus();
      }, 10);
    // ref1.current.focus()
  },[open])
  useEffect(()=>{
    if(password.password.length === 6){
      setCount(6)
    }
    else {
      setCount(4)
    }
    if(password.password === '') {
      setValue('')
    }
    ref1.current.focus()
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
        else if (constErrorPassword === 2 ){
          setOpen(true)
        }
        else if(value != password.password){
          setConstErrorPassword(constErrorPassword+1)
          setValue('')
          setMatch(false)
        }
    }
  },[value])
  useEffect(()=>{
    if(!isEnabled){
      setCount(4)
    }
    else {
      setCount(6)
    }
  },[isEnabled])
  return (
    <View  keyboardShouldPersistTaps="handled" style={[Gstyles.wrapper, Gstyles.wrapper2]}>
      {open&& 
      <PopUp
            title = {'Oh, my...'}
            text = {'It seems there is a problem with a passcode you’ve just created?'}
            button_text = {'Keep trying!'}
            text_2 = {'Create new passcode'}
            onPress = {()=>{
              setOpen(false)
              setConstErrorPassword(0)
              setValue('')
              ref1.current.focus()
            }}
            onPress1 = {()=>{
              navigation.navigate('SetPassword')
              dispatch(clear_password())
              ref1.current.focus()
            }}
      />
      }
      <View>
        <Svgs title={title} />
        <Text style={[Gstyles.text, {marginTop: 10}]}>{text}</Text>
      </View>
      <View   style={[styles.password_continer]}>
          <CodeField
            autoFocus={active}
            ref={ref1}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={Passwordcount?Passwordcount:count}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />
      </View>
      {options &&<View style = {{justifyContent:'center',alignItems:"center",flexDirection:'row'}}>
        <Text style = {{color:'#EAEAEA',fontFamily:"Lexend-Light "}}>4 digits</Text>
         <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
        <Text style = {{color:'#EAEAEA',fontFamily:"Lexend-Light "}}>6 digits</Text>
      </View>}
    </View>
  );
};
