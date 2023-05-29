import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BlueButton } from '../../Components/Button.js/BlueButton';
import { transfer_ton } from '../../store/action/action';
import { styles } from './styles';

export const SendToBottomSheetModal = ({close}) =>{
    const {send} = useSelector(st=>st)
    const {getMyBalance} = useSelector((st)=>st)
    const {transfer} = useSelector((st)=>st)
    const [value,setValue] = useState('')
    const dispatch = useDispatch()
    const handelClick = async() =>{
        const id = await AsyncStorage.getItem('token')
        dispatch(transfer_ton({
            sender_address:send.activeAdress,
            account_id:id,
            amount:value,
            comment:'',
            recipient_address:send.token
        }))
    }
    return <View style ={styles.container}>
        <View style = {{justifyContent:'center',alignItems:'center'}}>
            <Text style = {styles.title}>Send to:</Text>
            <View style = {{justifyContent:'center',alignItems:'center',marginVertical:20}}>
                {/* <Text style  = {[styles.text,{color:'#4DFF7E'}]}>markmartemianov.ton</Text> */}
                <Text style = {styles.text}>{send.token}</Text>
            </View>
            <View>
            <View style = {{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            {!transfer.status &&<TextInput 
                autoFocus = {true}
                value = {value} 
                keyboardType="numeric"
                onChangeText = {(e)=>setValue(e)} 
                placeholder="0 TON" 
                placeholderTextColor = {'#8A8A8A'} 
                // onSubmitEditing={()=>navigation.navigate('Confirm')}
                style = {[
                    styles.input,
                    value>+getMyBalance.balance ? {color:"red"}:{color:"white"},
                    value !== '' && (value?.length >2 ? {width:value?.length*10}:{width:value?.length*15}),
                    value ==='' ? {borderWidth:1.5,borderColor:'#161616'}:{borderWidth:0,borderColor:'#161616'}
                ]} />
            }
            {!transfer.status && value !=='' &&<Text style = {[{fontSize:13,top:0,color:"#fff"},value>+getMyBalance.balance && {color:"red"}]}>TON</Text>}
            </View>
                <Text style = {!transfer.status ?styles.text:styles.confirm}>{!transfer.status ?getMyBalance.balance:value} TON</Text>
            </View>
        </View>
        <View style = {{marginVertical:35}}>
           {!transfer.status? <BlueButton 
                onPress={()=>handelClick()} 
                loading={transfer.loading} 
                backgroundColor='#4DFF7E' 
                color='#161616'  
                text ="Confirm" 
                height={70} 
            />:
            <BlueButton 
                // onPress={()=>handelClick()} 
                // loading={transfer.loading} 
                backgroundColor='#2400FF' 
                color='#EAEAEA'  
                text ="Success!" 
                height={70} 
            />
        }
            {!transfer.status &&<Text onPress={close} style = {{color:"#EAEAEA",fontFamily:'Lexend-SemiBold',fontSize:15,textAlign:'center',justifyContent:'center',alignItems:'center',marginTop:15}}>Cancel</Text>}
        </View>
    </View>
}
