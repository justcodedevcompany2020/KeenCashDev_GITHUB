import {View,Dimensions} from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist'
import React, { useRef,useEffect,useState } from 'react';
import { Main } from '../../Components/Main'
import { Gstyles } from '../../Gstyle'

import { MoreWallet } from '../MoreWallet'
import {Connetct} from '../Connect/index'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getBalance } from '../../store/action/action';

export const MainPage = ({navigation}) =>{
    const bottomSheetRef = useRef(null);
    const [data,setData] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        getAddress()
        bottomSheetRef.current?.present()
    },[])
    useEffect(()=>{
        if(data[0]){
            dispatch(getBalance(data[0]))
        }
    },[data])
    const getHistory = ({index}) =>{
        if(index !== data.length-1){
            dispatch(getBalance(data[index]))
        }
    }
    const getAddress = async() =>{
        let code = JSON.parse(await AsyncStorage.getItem('addres'))
        console.log(await AsyncStorage.getItem('token'))
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
                onChangeIndex = {(index)=>{getHistory(index)}}
                showPagination
                paginationStyle = {{position:'absolute',top:-30}}
                paginationDefaultColor ='#8A8A8A'
                paginationActiveColor = '#4DFF7E'
                paginationStyleItem ={{width:10,height:10,marginHorizontal:3}}
            >
                {data.map((elm,i)=>{
                   return <View key={i} style = {{width:width-38}}>
                        {i!==data.length-1 ?
                            <Main navigation = {navigation} data={data} price={getMyBalance.balance} price_$ ={'0'} token = {elm} />
                            :
                            <MoreWallet navigation = {navigation} />
                        }
                    </View>
                })}
            </SwiperFlatList>
            {/* <Connetct ref1 = {bottomSheetRef} onPress = {()=>close()} /> */}
        </View>
    </View>
}