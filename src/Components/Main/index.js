import React,{useState} from 'react'
import {View, Text,TouchableOpacity, ScrollView,RefreshControl} from 'react-native';
import {Gstyles} from '../../Gstyle';
import {Svgs} from '../../Svg';
import {BlueButton} from '../Button.js/BlueButton';
import {styles} from './style';
import Clipboard from '@react-native-clipboard/clipboard';
import Item from './item';
import { useDispatch } from 'react-redux';
import { change_header_title } from '../../store/action/action';
import { Card } from './card';

export const Main = ({data, loading,price,price_$,token,navigation}) => {

    const [refreshing, setRefreshing] = useState(false);
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
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);
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
                <Card price={price} price_$ = {price_$} token = {token} />
                <View style={styles.button_wrapper}>
                <BlueButton
                    width={'48.5%'}
                    height={50}
                    text={'Receive'}
                    svg={'vector2'}
                    onPress = {()=>navigation.navigate('recive')}
                />
                <BlueButton 
                    width={'48.5%'} 
                    height={50} 
                    text={'Send'} 
                    svg={'vector1'} 
                    onPress = {()=>navigation.navigate('send')}
                    
                    />
                </View>
            </View>
            <View style={styles.data}>
            {loading ? (
                <View >
                    <View style = {styles.empty}>
                        <Svgs title={'loading'} />
                    </View>
                </View>
            ) : (
                <View style={styles.data}>
                {!data ? (
                    <View >
                    <Svgs title={'love_u_smiling'} />
                    <Text style={Gstyles.text}>
                        You have no transactions yet, so it’s only a friendly
                        placeholder.
                    </Text>
                    </View>
                ) : (
                    <View style={[styles.data,styles.data_iten]}>
                    <Text style ={styles.date} >25 March, Sat</Text>
                    { data.map((elm,i)=>(
                        <Item navigation = {navigation} plus={true} key={i} token = {'EQDCAfpTMlIh6xGABPSO0oIqMgVy5ncGpq75hgeCl4-UKMY8'} date = {'22:52'} price = {'+1.091'} />
                    ))}
                    </View> 
                )}
                </View>
            )}
            </View>
           
      </View>
    </ScrollView>
  );
};
