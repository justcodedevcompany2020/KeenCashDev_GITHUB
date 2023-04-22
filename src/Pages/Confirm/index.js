import { View,Text,Keyboard,TextInput,TouchableOpacity,ScrollView } from "react-native"
import {useRef, useState} from 'react'
import { useSelector } from "react-redux"
import { BlueButton } from "../../Components/Button.js/BlueButton"
import { Gstyles } from "../../Gstyle"
import { Svgs } from "../../Svg"

export const Confirm = ({navigation}) => {
    const {send} = useSelector(st=>st)
    const [comment,setComment] = useState('')
    const [errorMsg,setErrorMSg] = useState('')
    const [active,setActive] = useState(false)
    const ref = useRef()

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
    return <View style = {[Gstyles.home,{justifyContent:'space-between'}]}>
        <ScrollView showsVerticalScrollIndicator = {false}>
            <Text style ={{color:'#4DFF7E',textAlign:'center',fontSize:15,lineHeight:18,fontFamily:"Lexend-Light"}}>markmartemianov.ton</Text>
            <Text style = {{textAlign:'center',color:'#8A8A8A',fontSize:15,marginTop:15,paddingHorizontal:20,fontFamily:"Lexend-Light"}}>{'EQDCAfpTMlIh6xGABPSO0oIqMgVy5ncGpq75hgeCl4-UKMY8'}</Text>
            <View style = {{marginVertical:50}}>
                <Text style = {{color:'#EAEAEA',fontSize:30,fontFamily:"Lexend-Regular",textAlign:'center'}}>102.6847 TON</Text>
                <Text style = {{color:'#8A8A8A',textAlign:'center',fontSize:15}}>≈ 0.007 fee</Text>
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
                        height:'auto',
                        fontFamily:'Lexend-Regular',
                        borderWidth:1,
                        borderColor:(active ? '#525252':'#313131'),
                    }}
                    placeholder = 'Add comment...'
                    onChangeText={(e)=>handelChange(e)} 
                    onFocus = {()=>setActive(true)}
                    onBlur = {()=>setActive(false)}
                    blurOnSubmit={false} 
                    onSubmitEditing={()=>navigation.navigate('PinPage')}
                >
                                 
                        {comment.length <100  &&<Text style = {{color:'#EAEAEA'}}>{comment}</Text>}
                        {comment.length >=100 && <Text style = {{color:'#EAEAEA'}}>
                            {comment.slice(0,100)}
                            <Text style = {{color:'red'}}>{comment.slice(100)}</Text>
                        </Text>}
                </TextInput>
                {comment.length>10 && (
                    <TouchableOpacity onPress = {()=>{
                        setComment('')
                        setErrorMSg('')
                        }} style = {[{right:20,position:'absolute',justifyContent:'center',alignItems:'center',height:'100%'}]}>
                        <Svgs title={'x'} />
                    </TouchableOpacity>
                        )}   
            </View>
            <View>
                <Text style = {{color:"#8A8A8A",fontFamily:"Lexend-Light",fontSize:12,marginTop:10,lineHeight:13,marginLeft:15}}>
                    The comment is optional and visible to everyone. You must include the note when sending to an exchange.(100?) characters left.{'\n'}
                    <Text style = {{color:'red'}}> {errorMsg}</Text>
                </Text>
            </View>
        </ScrollView>
        <View style = {{marginBottom:30,marginTop:20}}>
            <BlueButton  onPress={()=>handlePress()} text={'Confirm and send'} color = {'#161616'} backgroundColor = {'#4DFF7E'} height = {50} />
        </View>
    </View>
}