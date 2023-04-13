import { View,Text, TextInput } from "react-native"
import {  } from "react-native-svg"
import { useSelector } from "react-redux"
import {styles} from './styles'
import { Gstyles } from "../../Gstyle"
import { BlueButton } from "../../Components/Button.js/BlueButton"
import { useState } from "react"

export const SendTo = ({navigation}) => {
    const {send} = useSelector(st=>st)
    const [value,setValue]= useState('')
    const[price,setPrice] = useState('500.5789')
    return <View style = {[Gstyles.home,{justifyContent:'space-around'}]}>
        <Text style ={{color:'#4DFF7E',textAlign:'center',fontSize:15,paddingHorizontal:20,lineHeight:18,fontWeight:300}}>{send.token}</Text>
        <View style = {{marginVertical:40,position:'relative',}}>
            <View style = {{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <TextInput 
                value = {value} 
                keyboardType="numeric"
                onChangeText = {(e)=>setValue(e)} 
                placeholder="0 TON" 
                placeholderTextColor = {'#8A8A8A'} 
                style = {[styles.input,value>+price && {color:"red"},value !== '' && (value.length >2 ? {width:value.length*18.8}:{width:value.length*25})]} />
            {value !=='' &&<Text style = {[{fontSize:30,top:-4,color:"#fff"},value>+price && {color:"red"}]}>TON</Text>}
            </View>
            <Text style = {{color:'red',textAlign:'center'}}>{value>+price && 'Insufficient funds'}</Text>
        </View> 
        <View>
            <Text onPress={()=>setValue(price)} style = {{color:"#EAEAEA",textAlign:'center',marginBottom:30}}>Send all: {price} TON</Text>
            <BlueButton onPress={()=>{
                    if(value<=+price){
                        navigation.navigate('Confirm')
                    }
                }} backgroundColor="#4DFF7E" color="#161616" text='Continue' height ={50} />
        </View>
    </View>
}   