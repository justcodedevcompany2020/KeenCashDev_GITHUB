import React,{useEffect, useState} from 'react'
import {View, Text, ScrollView,RefreshControl} from 'react-native';
import {Gstyles} from '../../Gstyle';
import {Svgs} from '../../Svg';
import {BlueButton} from '../Button.js/BlueButton';
import {styles} from './style';
import Item from './item';
import { useDispatch, useSelector } from 'react-redux';
import { active_address, change_header_title, clear_reansfer_ton, getBalance, snedTon } from '../../store/action/action';
import { Card } from './card';

export const Main = ({history,data, loading,price,price_$,token,navigation,loading1,index}) => {
    
    const [refreshing, setRefreshing] = useState(false);
    const {getMyBalance} = useSelector((st)=>st)
    const dispatch = useDispatch()
    const handelScroll = (e)=>{
        const currentOffset  = e.nativeEvent.contentOffset.y
        if(currentOffset>62){
            dispatch(change_header_title(price,price_$))
        }
        else {
            dispatch(change_header_title('',''))
        }
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(getBalance(token))
        setRefreshing(getMyBalance.loading);
      }, [getMyBalance.loading]);
    //   useEffect(()=>{
    //     console.log(token)
    //     if(token){
    //         console.log(getMyBalance.balance)
    //         dispatch(getBalance(token))                
    //     }
    // },[index])
    // console.log(index)
  return (
    <ScrollView 
        onScroll = {(e)=>handelScroll(e)} 
        showsVerticalScrollIndicator ={false}
        refreshControl = {
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }    
    >
        <View style = {[styles.main]}>
            <View >
                <Card loading = {loading1} price={price} price_$ = {price_$} token = {token} />
                <View style={styles.button_wrapper}>
                <BlueButton
                    width={'48.5%'}
                    height={50}
                    text={'Receive'}
                    svg={'vector2'}
                    onPress = {()=>{
                        dispatch(active_address(token))
                        navigation.navigate('recive')
                    }}
                />
                <BlueButton 
                    width={'48.5%'} 
                    height={50} 
                    text={'Send'} 
                    svg={'vector1'} 
                    onPress = {()=>{
                        dispatch(clear_reansfer_ton())
                        dispatch(snedTon(token))
                        navigation.navigate('send')
                    }
                    }
                    />
                </View>
            </View>
            <View style={styles.data}>
            {getMyBalance.historyLoading ? (
                <View >
                    <View style = {styles.empty}>
                        <Svgs title={'loading'} />
                    </View>
                </View>
            ) : (
                <View style={styles.data}>
                {history[0] === '' ? (
                    <View style = {{justifyContent:'center',alignItems:'center'}}>
                    <Svgs title={'love_u_smiling'} />
                    <Text style={Gstyles.text}>
                        You have no transactions yet, so it’s only a friendly
                        placeholder.
                    </Text>
                    </View>
                ) : (
                    <View style={[styles.data,styles.data_iten]}>
                    {/* <Text style ={styles.date} >25 March, Sat</Text> */}
                    {history.map((elm,i)=>{
                        let item = elm.split(',')
                        return<Item 
                            navigation = {navigation} 
                            plus={true} 
                            key={i} 
                            token = {item[2] && item[2]?.split(' ')[2]} 
                            // date = {item[0].replace("LT: ",'')} 
                            price = {`${item[1] &&  item[1].split(':')[1].split(' ')[1]}`} 
                            from = {item[3] && item[3]?.split(' ')[1]}
                            />
                    })}
                    </View> 
                )}
                </View>
            )}
            </View>
      </View>
    </ScrollView>
  );
};
