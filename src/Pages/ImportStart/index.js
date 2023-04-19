import {useState,useRef} from 'react'
import {View,Text,ScrollView,StatusBar, TextInput} from 'react-native'
import { Button } from '../../Components/Button.js'
import { Input } from '../../Components/Input'
import { Gstyles } from '../../Gstyle'

export const InportStart = ({navigation}) => {
    const ref = useRef()
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const ref6 = useRef()
    const ref7 = useRef()
    const ref8 = useRef()
    const ref9 = useRef()
    const ref10 = useRef()
    const ref11 = useRef()
    const ref12 = useRef()
    const ref13 = useRef()
    const ref14 = useRef()
    const ref15 = useRef()
    const ref16 = useRef()
    const ref17 = useRef()
    const ref18 = useRef()
    const ref19 = useRef()
    const ref20 = useRef()
    const ref21 = useRef()
    const ref22 = useRef()
    const ref23 = useRef()
    const [input,setInput] = useState([
        {value:"",ref:ref},
        {value:"",ref:ref1},
        {value:"",ref:ref2},
        {value:"",ref:ref3},
        {value:"",ref:ref4},
        {value:"",ref:ref5},
        {value:"",ref:ref6},
        {value:"",ref:ref7},
        {value:"",ref:ref8},
        {value:"",ref:ref9},
        {value:"",ref:ref10},
        {value:"",ref:ref11},
        {value:"",ref:ref12},
        {value:"",ref:ref13},
        {value:"",ref:ref14},
        {value:"",ref:ref15},
        {value:"",ref:ref16},
        {value:"",ref:ref17},
        {value:"",ref:ref18},
        {value:"",ref:ref19},
        {value:"",ref:ref20},
        {value:"",ref:ref21},
        {value:"",ref:ref22},
        {value:"",ref:ref23},
    ])
    const handelChnge = (i,e) => {
        let item =[...input]
        item[i].value = e
        setInput(item)
    }
    const handelSubmit = (i) => {
        if(i !== 24){
            input[i].ref.current?.focus();
        }
    }
    return <ScrollView showsVerticalScrollIndicator = {false} style = {Gstyles.wrapper}>
        <StatusBar
            backgroundColor="#000"
        />
        <View>
            <Text style = {[Gstyles.title,{marginVertical:20}]}>24 Secret Words</Text>
            <Text style = {[Gstyles.text,{paddingHorizontal:25}]}>You can restore access to your wallet by entering 24 words you wrote when down you creating the wallet.</Text>
            <Text onPress={()=>navigation.navigate('WhatADay')} style = {{color:'#8A8A8A',fontSize:15,fontFamily:'Lexend-Medium',textAlign:"center",marginVertical:20}}>I don’t have those</Text>
        </View>
        <View>
            {input.map((elm,i)=>(
                <View key={i} style = {{marginVertical:10}}>
        <TextInput
            style={{
              height: 50,
              borderRadius: 15,
              backgroundColor: '#313131',
              position: 'relative',
              color: '#fff',
              paddingHorizontal: 35  ,
              paddingRight: 40,
            }}
            ref={input[i].ref}
            autoFocus={i === 0}
            onChange={e => handelChnge(i, e)}
            onSubmitEditing={()=>handelSubmit(i+1)}
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
            {`${i+1}.`}
          </Text>
                </View>
            ))
            }
            <View style = {{marginVertical:5}}>
                <Button onPress={()=>navigation.navigate('ImportComplete')} title={'Continue'}  />
            </View>
        </View>
    </ScrollView>
}