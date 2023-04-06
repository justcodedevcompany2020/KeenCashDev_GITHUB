import {useState} from 'react'
import {View,Text,ScrollView} from 'react-native'
import { Button } from '../../Components/Button.js'
import { Input } from '../../Components/Input'
import { Gstyles } from '../../Gstyle'

export const InportStart = ({navigation}) => {
    const [input,setInput] = useState([
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
        {value:""},
    ])
    return <ScrollView style = {Gstyles.wrapper}>
        <View>
            <Text style = {[Gstyles.title,{marginVertical:20}]}>24 Secret Words</Text>
            <Text style = {[Gstyles.text,{paddingHorizontal:25}]}>You can restore access to your wallet by entering 24 words you wrote when down you creating the wallet.</Text>
            <Text style = {{color:'#8A8A8A',fontSize:15,fontWeight:500,textAlign:"center",marginVertical:20}}>I don’t have those</Text>
        </View>
        <View>
            {input.map((elm,i)=>(
                <View style = {{marginVertical:10}}>
                    <Input id ={i+1} />
                </View>
            ))
            }
            <View style = {{marginVertical:5}}>
                <Button onPress={()=>navigation.navigate('ImportComplete')} title={'Continue'}  />
            </View>
        </View>
    </ScrollView>
}