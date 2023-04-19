import {View, Text,Switch,Keyboard,TouchableOpacity,TextInput } from 'react-native';
import React,{useState,  useEffect,useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux'
import {Gstyles} from '../../Gstyle';
import {Svgs} from '../../Svg';
import {styles} from './styles';
import {
  CodeField,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {  clear_password, set_password } from '../../store/action/action';
import { PopUp } from '../PopUp';
export const SetConfigPassword = ({title, text, options,navigation,action,Passwordcount}) => {
  const [count, setCount] = useState(4);
  const [enableMask] = useState(true);
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  const {password} = useSelector((st)=>st)
  const [open,setOpen] = useState(false)
  const [match,setMatch] = useState(true)
  // const [props, getCellOnLayoutHandler] = useClearByFocusCell({
  //   value,
  //   setValue,
  // });
  const inputRef = useRef(null);
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
        style={[styles.cell, color && styles.focusCell, !match && {borderColor:'red'}]}
        >
          {textChild}
      </Text>
    );
  };
  const [constErrorPassword,setConstErrorPassword] = useState(0)
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setTimeout(() => inputRef.current.focus(), 500)
    });
    return unsubscribe;
  }, [navigation]);

  const handelChnage = (e) => {
    setValue(e)
    if(e.length === count){
        if(action === 'set'){
          dispatch(set_password(e))
          navigation.navigate('ConfirmPassword')
        }
        else if(e == password.password){
          navigation.navigate('WellDone')
        }
        else if (constErrorPassword === 2 ){
          setOpen(true)
        }
        else if(e != password.password){
          setConstErrorPassword(constErrorPassword+1)
          setValue('')
          setMatch(false)
        }
    }
  }

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
  },[password])

  useEffect(()=>{
    if(!isEnabled){
      setCount(4)
    }
    else {
      setCount(6)
    }
  },[isEnabled])


const openKeyboard = () =>{
  setTimeout(() => inputRef.current.focus(), 500)
}
  return (
    <View  style={[Gstyles.wrapper, Gstyles.wrapper2]}>
      {open && 
      <PopUp
            title = {'Oh, my...'}
            text = {'It seems there is a problem with a passcode you’ve just created?'}
            button_text = {'Keep trying!'}
            text_2 = {'Create new passcode'}
            onPress = {()=>{
              setOpen(false)
              openKeyboard()
              setConstErrorPassword(0)
              setValue('')
            }}
            onPress1 = {()=>{

              navigation.navigate('SetPassword')
              openKeyboard()
              setValue('')
              dispatch(clear_password())
            }}
      />
      }
      <View style = {{justifyContent:'center',alignItems:'center'}}>
        <Svgs title={title} />
        <Text style={[Gstyles.text, {marginTop: 10}]}>{text}</Text>
      </View> 
      <View style={[styles.password_continer]}>
          <CodeField
            // autoFocus={false}
            ref={inputRef}
            // {...props} 
            value={value}
            onChangeText={(e)=>handelChnage(e)}
            cellCount={Passwordcount?Passwordcount:count}
            keyboardType="number-pad"
            renderCell={renderCell}
          />

      </View >
       
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
