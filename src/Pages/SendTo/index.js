import { View,Text, TextInput } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import {styles} from './styles'
import { Gstyles } from "../../Gstyle"
import { BlueButton } from "../../Components/Button.js/BlueButton"
import { useState,useEffect } from "react"
import { getBalance, send_balance } from "../../store/action/action"

export const SendTo = ({navigation}) => {
    const {send} = useSelector(st=>st)
    const dispatch = useDispatch()
    const {transfer} = useSelector((st)=>st)
    const {getMyBalance} = useSelector((st)=>st)
    useEffect(()=>{
        dispatch(getBalance(transfer.address))
    },[])
    useEffect(()=>{
        setPrice(getMyBalance.balance)
    },[getMyBalance.balance])
    const handelChange = (e) =>{
        setValue(e)
        dispatch(send_balance(e))
    }
    const [value,setValue]= useState('')
    const[price,setPrice] = useState('')
    return <View style = {[Gstyles.home,{justifyContent:'space-around'}]}>
        <Text style ={{color:'#4DFF7E',textAlign:'center',fontSize:15,paddingHorizontal:20,lineHeight:18,fontFamily:'Lexend-Regular',
    }}>{send.token}</Text>
        <View style = {{marginVertical:40,position:'relative',}}>
            <View style = {{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <TextInput 
                autoFocus = {true}
                value = {value} 
                keyboardType="numeric"
                onChangeText = {(e)=>handelChange(e)} 
                placeholder="0 TON" 
                placeholderTextColor = {'#8A8A8A'} 
                onSubmitEditing={()=>navigation.navigate('Confirm')}
                style = {[
                    styles.input,
                    value>+price && {color:"red"},
                    value !== '' && (value?.length >2 ? {width:value?.length*19.6}:{width:value?.length*25}),
                    value ==='' ? {borderWidth:1.5,borderColor:'#161616'}:{borderWidth:0,borderColor:'#161616'}
                ]} />
            {value !=='' &&<Text style = {[{fontSize:30,top:-4,color:"#fff"},value>+price && {color:"red"}]}>TON</Text>}
            </View>
            <Text style = {{color:'red',textAlign:'center',fontFamily:'Lexend-Regular'}}>{value>+price && 'Insufficient funds'}</Text>
        </View> 
        <View>
            <Text onPress={()=>setValue(price)} style = {{color:"#EAEAEA",textAlign:'center',marginBottom:30,fontFamily:'Lexend-Regular'}}>Send all: {price} TON</Text>
            <BlueButton onPress={()=>{
                    if(value<=+price && value !==''){
                        navigation.navigate('Confirm')
                    }
                }} backgroundColor="#4DFF7E" color="#161616" text='Continue' height ={50} />
        </View>
    </View>
}   