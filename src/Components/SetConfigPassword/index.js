import {View, Text,Switch,TextInput } from 'react-native';
import React,{useState,  useEffect,useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux'
import {Gstyles} from '../../Gstyle';
import {Svgs} from '../../Svg';
import {styles} from './styles';
import {
  CodeField,
  // useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {  clear_password, set_password } from '../../store/action/action';
import { PopUp } from '../PopUp';
export const SetConfigPassword = ({title, text, options,navigation,action,Passwordcount}) => {
  const [count, setCount] = useState(Passwordcount?Passwordcount:4);
  // const [enableMask] = useState(true);
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  const {password} = useSelector((st)=>st)
  const [open,setOpen] = useState(false)
  const [match,setMatch] = useState(true)
  const [constErrorPassword,setConstErrorPassword] = useState(0)
  const [isEnabled, setIsEnabled] = useState(false);
  // const [props, getCellOnLayoutHandler] = useClearByFocusCell({
  //   value,
  //   setValue,
  // });
  const inputRef = useRef();
  const inputRef1 = useRef();
  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;
    let color = false;
    if (symbol) {
      color = true;
      textChild = '•' ;
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


  const toggleSwitch = () => {
    dispatch(clear_password())
    setIsEnabled(previousState => !previousState)
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
        setIsEnabled(false)
      if(password.password){
        setCount(password.password.length)
      }
      if(!password.password){
        setIsEnabled(false)
      }
      setTimeout(() => inputRef.current.focus(), 200)
    });
    return unsubscribe;
  }, [navigation]);

  const handelChnage = (e) => {
    if(!password.password.length){
      if(e.length <= count){
        setValue(e)
      }
    }
    else {
      if(e.length <= 6){
      setValue(e)
      }
    }
    setTimeout(()=>{
      if(!password.password.length){
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
      else {
        if(e.length === password.password.length){
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
    },100)
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
    if(password.password.length){
      setCount(password.password.length)
    }
  },[isEnabled])


const openKeyboard = () =>{
  inputRef.current.blur()
  // inputRef1.current.focus()
  setTimeout(() => inputRef.current.focus(), 100)
}
  return (
    <View  style={[Gstyles.wrapper, Gstyles.wrapper2]}>
      <PopUp
          title = {'Oh, my...'}
          text = {'It seems there is a problem with a passcode you’ve just created?'}
          button_text = {'Keep trying!'}
          text_2 = {'Create new passcode'}
          open = {open}
          onPress = {()=>{
            setOpen(false)
            setTimeout(() => {
              openKeyboard()
            },101)
            // inputRef1.current.focus()
            setConstErrorPassword(0)
            setValue('')
          }}
          onPress1 = {()=>{
            setOpen(false)
            setTimeout(() => {
              navigation.navigate('SetPassword')
            },101)
            inputRef.current.focus()
            setValue('')
            dispatch(clear_password())
          }}
      />
      <View style = {{justifyContent:'center',alignItems:'center'}}>
        <Svgs title={title} />
        <Text style={[Gstyles.text, {marginTop: 10}]}>Enter the {count} digits in the passcode.</Text>
      </View> 
      <View style={[styles.password_continer]}>
          <CodeField
            autoFocus={true}
            ref={inputRef}
            // {...props} 
            value={value}
            onChangeText={(e)=>handelChnage(e)}
            cellCount={Passwordcount?Passwordcount:count}
            keyboardType="number-pad"
            renderCell={renderCell}
          />
      </View >
       {/* <TextInput ref={inputRef1} keyboardType="number-pad"  /> */}
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
