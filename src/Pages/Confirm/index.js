import { View,Text,Keyboard,TextInput,TouchableOpacity } from "react-native"
import {useRef, useState} from 'react'
import { useSelector } from "react-redux"
import { BlueButton } from "../../Components/Button.js/BlueButton"
import { Input } from "../../Components/Input"
import { Gstyles } from "../../Gstyle"
import { LogBox } from "react-native/Libraries/LogBox/LogBox"
import { Svgs } from "../../Svg"

export const Confirm = ({navigation}) => {
    const {send} = useSelector(st=>st)
    const [comment,setComment] = useState('')
    const [comment1, setComment1] = useState('')
    const [errorMsg,setErrorMSg] = useState('')
    const ref = useRef()
    const ref1 = useRef()

    const handlePress = () =>{
        Keyboard.dismiss()
        if(!errorMsg){
            navigation.navigate('PinPage')
        }
    }
    const handelChange = (e) => {
            setComment(e)
            if(e.length >100){
                setErrorMSg('Message size has been exceeded by 6 characters.')
            }
            else {
                setErrorMSg('')
            }
    }
    return <View style = {[Gstyles.home,{justifyContent:'space-around'}]}>
        <View>
            <Text style ={{color:'#4DFF7E',textAlign:'center',fontSize:15,lineHeight:18,fontWeight:300}}>markmartemianov.ton</Text>
            <Text style = {{textAlign:'center',color:'#8A8A8A',fontSize:15,marginTop:15}}>{send.token}</Text>
            <View style = {{marginVertical:50}}>
                <Text style = {{color:'#EAEAEA',fontSize:30,fontWeight:400,textAlign:'center'}}>102.6847 TON</Text>
                <Text style = {{color:'#8A8A8A',textAlign:'center',fontSize:15}}>≈ 0.007r fee</Text>
            </View>
            <View>
                <TextInput 
                    ref={ref}
                    multiline={true}
                    style = {{
                        borderRadius:15,
                        backgroundColor:'#313131',
                        position:'relative',
                        color:'#fff',
                        paddingHorizontal:10,
                        paddingRight:40,
                        height:'auto'
                    }}    
                    onChangeText={(e)=>handelChange(e)} 
                    blurOnSubmit={false} 
                >
                                 
                        {comment.length <100  &&<Text style = {{color:'#EAEAEA'}}>{comment}</Text>}
                        {comment.length >=100 && <Text style = {{color:'#EAEAEA'}}>
                            {comment.slice(0,100)}
                            <Text style = {{color:'red'}}>{comment.slice(100)}</Text>
                        </Text>}
                </TextInput>
                {comment.length>10 && (
                    <TouchableOpacity onPress = {()=>setComment('')} style = {[{right:20,position:'absolute',justifyContent:'center',alignItems:'center',height:'100%'}]}>
                        <Svgs title={'x'} />
                    </TouchableOpacity>
                        )}   
            </View>
            <View>
                <Text style = {{color:"#8A8A8A",fontWeight:300,fontSize:12,marginTop:10,lineHeight:13,marginLeft:15}}>
                    The comment is optional and visible to everyone. You must include the note when sending to an exchange.(100?) characters left.{'\n'}
                    <Text style = {{color:'red'}}> {errorMsg}</Text>
                </Text>
            </View>
        </View>
        <View style = {{marginBottom:30}}>
            <BlueButton  onPress={()=>handlePress()} text={'Confirm and send'} color = {'#161616'} backgroundColor = {'#4DFF7E'} height = {50} />
        </View>
    </View>
}