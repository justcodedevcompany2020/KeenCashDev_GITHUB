import {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput } from 'react-native';
import {Button} from '../../Components/Button.js';
import {Gstyles} from '../../Gstyle';

export const SecurityNerdCheck = ({navigation}) => {
  useEffect(() => {
    // Keyboard.isVisible(true);
  }, []);
  const [input, setInput] = useState([{value: ''}, {value: ''}, {value: ''}]);
  const [a,setA] = useState(false)
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const handelChnge = (i, e) => {
    let item = [...input];
    item[i] = e;
    setInput(item);
  };

  const handleInput1Submit = () => {
    ref1.current.blur()
    setTimeout(()=>{
      ref2.current.focus();
    },10)
  };
  const handleInput2Submit = () => {
    ref3.current.focus();
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //       setA(true)
  //       ref1.current.focus();
  //     }, 10);
  // }, []);
  return (
    <View style={[Gstyles.wrapper, Gstyles.wrapper2]}>
      <View>
        <Text style={[Gstyles.title, {marginBottom: 10}]}>
          Security nerd check!
        </Text>
        <Text style={Gstyles.text}>
          Let’s check that you wrote them down correctly. Please enter the words
          5, 15 and 18.
        </Text>
      </View>
      <View>
        <View style={{marginVertical: 10}}>
          <TextInput
            style={{
              height: 50,
              borderRadius: 15,
              backgroundColor: '#313131',
              position: 'relative',
              color: '#fff',
              paddingHorizontal: 30,
              paddingRight: 40,
            }}
            ref={ref1}
            autoFocus={true}
            onChange={e => handelChnge(0, e)}
            onSubmitEditing={handleInput1Submit}
            keyboardAppearance="default"
            enablesReturnKeyAutomatically
          />
          <Text
            style={{
              position: 'absolute',
              color: '#8A8A8A',
              top: 15,
              left: 15,
            }}>
            {'1.'}
          </Text>
        </View>
        <View style={{marginVertical: 10}}>
          <TextInput
            style={{
              height: 50,
              borderRadius: 15,
              backgroundColor: '#313131',
              position: 'relative',
              color: '#fff',
              paddingHorizontal: 30,
              paddingRight: 40,
            }}
            // autoFocus={true}
            // editable = {a}
            onSubmitEditing={handleInput2Submit}
            onChange={e => handelChnge(1, e)}
            ref={ref2}
          />
          <Text
            style={{
              position: 'absolute',
              color: '#8A8A8A',
              top: 15,
              left: 15,
            }}>
            {'2.'}
          </Text>
        </View>
        <View style={{marginVertical: 10}}>
          <TextInput
            style={{
              height: 50,
              borderRadius: 15,
              backgroundColor: '#313131',
              position: 'relative',
              color: '#fff',
              paddingRight: 40,
              paddingHorizontal: 30,
            }}
            ref={ref3}
            onChange={e => handelChnge(2, e)}
          />
          <Text
            style={{
              position: 'absolute',
              color: '#8A8A8A',
              top: 15,
              left: 15,
            }}>
            {'3.'}
          </Text>
        </View>
      </View>
      <View>
        <Button
          title={'Continue'}
          onPress={() => navigation.navigate('SetPassword')}
        />
      </View>
    </View>
  );
};
