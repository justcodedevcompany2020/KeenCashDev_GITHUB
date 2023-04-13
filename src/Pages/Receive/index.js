import {View,Text,ScrollView} from 'react-native'
import { BlueButton } from '../../Components/Button.js/BlueButton'
import { Gstyles } from '../../Gstyle'
import { Svgs } from '../../Svg'

export const Resive  = () => {
    return <ScrollView style = {Gstyles.home}>
        <View>
        <Text style = {{color:'#E9FF61',textAlign:'center',fontWeight:870,fontSize:30}}>receive TON</Text>
        <Text style = {[Gstyles.text,{lineHeight:18.75,marginVertical:10,marginHorizontal:20}]}>Send only Toncoin (TON) to this address. Sending other coins may result in permanent loss.</Text>
        <View style ={{justifyContent:'center',alignItems:'center',marginVertical:40}}>
            <Svgs title={'QRCode'} />
            <Text style = {{color:'#8A8A8A',fontSize:12,fontWeight:300,marginTop:25,}}>Your wallet</Text>
        </View>
        <View>
            <Text style = {{color:'#FFFFFF',fontWeight:300,fontSize:15,textAlign:'center',marginBottom:10,marginHorizontal:20}}>EQAQxrU1G0D9-FQ3h1mO7o5qex-JJWvrAE82QnezDHqrS16B</Text>
        </View>
        </View>
        <View style = {{marginVertical:30}}>
            <BlueButton svg = {'share'} backgroundColor='#4DFF7E' color='#161616' text='Share wallet' height={50} />
        </View>
    </ScrollView>
}
