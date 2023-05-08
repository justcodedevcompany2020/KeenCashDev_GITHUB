import {View,Dimensions} from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist'
import React, { useRef,useEffect,useState } from 'react';
import { Main } from '../../Components/Main'
import { Gstyles } from '../../Gstyle'

import { MoreWallet } from '../MoreWallet'
import {Connetct} from '../Connect/index'
import { useDispatch } from 'react-redux';
import { checkToken } from '../../store/action/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MainPage = ({navigation}) =>{
    const bottomSheetRef = useRef(null);
    const [data,setData] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        getAddress()
        bottomSheetRef.current?.present()
        
    },[])
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
    const { width } = Dimensions.get('window');
    // const data = [{},{},{}]
    return <View style = {Gstyles.home}>
        <View style = {Gstyles.container}>
            <SwiperFlatList
                showPagination
                paginationStyle = {{position:'absolute',top:-30}}
                paginationDefaultColor ='#8A8A8A'
                paginationActiveColor = '#4DFF7E'
                paginationStyleItem ={{width:10,height:10,marginHorizontal:3}}
            >
                {data.map((elm,i)=>{
                   return <View key={i} style = {{width:width-38}}>
                        {i!==data.length-1 ?
                            <Main navigation = {navigation} data={data} price={'1 000.023'} price_$ ={'2.200'} token = {elm} />
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