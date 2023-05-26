import {View,Dimensions,TouchableOpacity} from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist'
import React, { useRef,useEffect,useState } from 'react';
import { Main } from '../../Components/Main'
import { Gstyles } from '../../Gstyle'

import { MoreWallet } from '../MoreWallet'
import {Connetct} from '../Connect/index'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { active_card, clear_reansfer_ton, clear_ton_white_qr, getBalance, get_accaunt, get_transaction_history, snedTon } from '../../store/action/action';
import { QR } from '../../Svg';

export const MainPage = ({navigation}) =>{
    const bottomSheetRef = useRef(null);
    const [data,setData] = useState([])
    const [activeCard,setActiveCard] = useState(0)
    const {sendQr} = useSelector((st)=>st)
    const dispatch = useDispatch()
    useEffect(()=>{
        // getAddress()
        checkId()
        // bottomSheetRef.current?.present()
    },[])
    useEffect(()=>{
        if(sendQr.open){
            bottomSheetRef?.current?.present()
        }
    },[sendQr.open])
    const checkId = async () =>{
        let id = await AsyncStorage.getItem('token')
        dispatch(get_accaunt(id))
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            getAddress()

        });
        return unsubscribe;
      }, [navigation]);
    useEffect(()=>{
        if(data[activeCard]){
            dispatch(getBalance(data[activeCard]))             
            dispatch(get_transaction_history(data[activeCard]))                
        }
    },[data])
    useEffect(()=>{
        dispatch(snedTon(activeCard))
        if(data[activeCard]){
            dispatch(getBalance(data[activeCard]))
            dispatch(get_transaction_history(data[activeCard]))       
        }

    },[activeCard])
    // const getHistory = ({index}) =>{
    //     if(index !== data.length-1){
    //         dispatch(getBalance(data[index]))
    //     }
    // }
    const getAddress = async() =>{
        let code = JSON.parse(await AsyncStorage.getItem('addres'))
        let itme = [...data]
        item = code
        item.push('')     
        setData(item)
    }
    const close = ()=>{
        bottomSheetRef.current?.dismiss()
    }
    const {getMyBalance} = useSelector((st)=>st)
    const { width } = Dimensions.get('window');
    return <View style = {Gstyles.home}>
        <View style = {Gstyles.container}>
            <SwiperFlatList
                onChangeIndex = {(index)=>{setActiveCard(index.index)}}
                showPagination
                paginationStyle = {{position:'absolute',top:-30}}
                paginationDefaultColor ='#8A8A8A'
                paginationActiveColor = '#4DFF7E'
                paginationStyleItem ={{width:10,height:10,marginHorizontal:3}}
            >
                {data.map((elm,i)=>{
                   return <View key={i} style = {{width:width-40}}>
                        {i!==data.length-1 ?
                            <Main history = {getMyBalance.history} index = {i} loading1={getMyBalance.loading} navigation = {navigation} data={data} price={getMyBalance.balance} price_$ ={'0'}  token = {elm} />
                            :
                            <MoreWallet navigation = {navigation} />
                        }
                    </View>
                })}
            </SwiperFlatList>
            <Connetct ref1 = {bottomSheetRef} onPress = {()=>close()} />
        </View>
        <TouchableOpacity onPress={()=>{
                dispatch(clear_ton_white_qr())
                dispatch(clear_reansfer_ton())
                navigation.navigate('QrNavigation')
            }} style = {{position:'absolute',bottom:30,left:0,right:0,alignItems:'center'}}>
            <QR />
        </TouchableOpacity>
    </View>
}