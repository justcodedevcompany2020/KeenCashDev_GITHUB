import { Card } from '../Main/card'
import { View ,Text,Image, TouchableOpacity,ScrollView} from "react-native"
import { styles } from './styles'
import { NftCard } from './NftCard'
import img from '../../img/nft.png'

export const NFtListMain = ({navigation}) =>{
    return <ScrollView 
            showsVerticalScrollIndicator ={false}
    >
    <View>
            <Card price={0} price_$ = {0} token = {'EQAQxrU1G0D9-FQ3h1mO7o5qex-JJWvrAE82QnezDHqrS16B'} />
            <View style ={{marginVertical:40}}>
                <Text style = {{color:'#EAEAEA',fontFamily:"Lexend-Regular",fontSize:15,}}>NFT List</Text>
            </View>
            <View style = {styles.NftCard}>
                <NftCard img = {require('../../img/nft.png')} text  = {'Lost Dogs'} title = {'Havana'} navigation ={navigation} />
                <NftCard img = {img} text  = {'Lost Dogs'} title = {'Havana'} navigation ={navigation}/>
                <NftCard img = {img} text  = {'Lost Dogs'} title = {'Havana'} navigation ={navigation}/>
                <NftCard img = {img} text  = {'Lost Dogs'} title = {'Havana'} navigation ={navigation}/>
                <NftCard img = {img} text  = {'Lost Dogs'} title = {'Havana'} navigation ={navigation}/>
            </View>
    </View>
</ScrollView>
}