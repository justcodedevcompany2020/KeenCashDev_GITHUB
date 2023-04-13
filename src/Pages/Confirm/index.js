import { View,Text,Keyboard } from "react-native"
import {useState} from 'react'
import { useSelector } from "react-redux"
import { BlueButton } from "../../Components/Button.js/BlueButton"
import { Input } from "../../Components/Input"
import { Gstyles } from "../../Gstyle"

export const Confirm = ({navigation}) => {
    const {send} = useSelector(st=>st)
    const [comment,setComment] = useState('')
    const [errorMsg,setErrorMSg] = useState('')
    const handlePress = () =>{
        Keyboard.dismiss()
        if(!errorMsg){
            navigation.navigate('PinPage')
        }
        setErrorMSg('')
    }
    const handelChange = (e) => {
        setComment(e)
        if(e.length>100){
            setErrorMSg('Message size has been exceeded by 100 characters.')
        }
    }
    return <View style = {[Gstyles.home,{justifyContent:'space-around'}]}>
        <View>
            <Text style ={{color:'#4DFF7E',textAlign:'center',fontSize:15,lineHeight:18,fontWeight:300}}>markmartemianov.ton</Text>
            <Text style = {{textAlign:'center',color:'#8A8A8A',fontSize:15,marginTop:15}}>{send.token}</Text>
            <View style = {{marginVertical:50}}>
                <Text style = {{color:'#EAEAEA',fontSize:30,fontWeight:400,textAlign:'center'}}>102.6847 TON</Text>
                <Text style = {{color:'#8A8A8A',textAlign:'center',fontSize:15}}>≈ 0.007 fee</Text>
            </View>
            <View>
                <Input value={comment } onChange={(e)=>handelChange(e)} placeholder={'Add comment...'} height = {80} x = {comment.length>30} onPress ={()=>setComment('')} />
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