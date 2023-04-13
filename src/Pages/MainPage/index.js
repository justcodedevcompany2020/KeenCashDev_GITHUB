import {View,Dimensions} from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist'
import React, { useRef,useEffect, forwardRef } from 'react';
import { Main } from '../../Components/Main'
import { Gstyles } from '../../Gstyle'

import { MoreWallet } from '../MoreWallet'
import {Connetct} from '../Connect/index'

export const MainPage = ({navigation}) =>{
    const bottomSheetRef = useRef(null);
    useEffect(()=>{
        bottomSheetRef.current?.present()
    },[])
    const close = ()=>{
        bottomSheetRef.current?.dismiss()
    }
    const { width } = Dimensions.get('window');
    const data = [{},{},{}]
    return <View style = {Gstyles.home}>
        <View  style = {Gstyles.container}>
            <SwiperFlatList
                showPagination
                paginationStyle = {{position:'absolute',top:-30}}
                paginationDefaultColor ='#8A8A8A'
                paginationActiveColor = '#4DFF7E'
                paginationStyleItem ={{width:10,height:10,marginHorizontal:3}}
            >
                {data.map((elm,i)=>(
                    <View key={i} style = {{width:width-38}}>
                        {i!==data.length-1 ?
                            <Main navigation = {navigation} data={data} price={'1 000.023'} price_$ ={'2.200'} token = 'EQAQxrU1G0D9-FQ3h1mO7o5qex-JJWvrAE82QnezDHqrS16B' />
                            :
                            <MoreWallet />
                        }
                    </View>
                ))}
            </SwiperFlatList>
            <Connetct ref1 = {bottomSheetRef} onPress = {()=>close()} />
        </View>
    </View>
}