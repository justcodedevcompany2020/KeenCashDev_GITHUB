import { View,Dimensions,Text,ScrollView } from "react-native"
import {styles} from './styles'
import { Card } from "../Main/card"
import { NftCard } from "./NftCard"
import img from '../../img/nft.png'

export const NftList =({navigation}) => {
    return (
    <ScrollView >
        <Card price={0} price_$ = {0} token = {'EQAQxrU1G0D9-FQ3h1mO7o5qex-JJWvrAE82QnezDHqrS16B'} />
        <View style ={{marginVertical:40}}>
            <Text style = {{color:'#EAEAEA',fontWeight:400,fontSize:15,}}>NFT List</Text>
        </View>
        <View style = {styles.NftCard}>
            <NftCard img = {require('../../img/nft.png')} text  = {'Lost Dogs'} title = {'Havana'} navigation ={navigation} />
            <NftCard img = {img} text  = {'Lost Dogs'} title = {'Havana'} navigation ={navigation}/>
            <NftCard img = {img} text  = {'Lost Dogs'} title = {'Havana'} navigation ={navigation}/>
            <NftCard img = {img} text  = {'Lost Dogs'} title = {'Havana'} navigation ={navigation}/>
            <NftCard img = {img} text  = {'Lost Dogs'} title = {'Havana'} navigation ={navigation}/>
        </View>
    </ScrollView>
)
}