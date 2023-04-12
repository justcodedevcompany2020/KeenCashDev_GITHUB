import { View ,Text,ScrollView} from "react-native"
import {styles} from './styles'
import { Input } from "../../Components/Input"
import { Gstyles } from "../../Gstyle"
import { useState } from "react"
import { BlueButton } from "../../Components/Button.js/BlueButton"
import { ErrorPopUp } from "../../Components/ErrorPopUp"
import { SendToken } from "../../store/action/action"
import { useDispatch } from "react-redux"

export const Send = ({navigation}) => {
    const [past,setPast] = useState('')
    const dispatch = useDispatch()
    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setPast(text);
      };
    const [data,setData] = useState([
        {date:'25 March',text:'EQDCAfpTMlIh6xGABPSO0oIqMgVy5ncGpq75hgeCl4-UKMY8'},
        {date:'25 March',text:'EQDCAfpTMlIh6xGABPSO0oIqMgVy5ncGpq75hgeCl4-UKMY8'},
        {date:'25 March',text:'EQDCAfpTMlIh6xGABPSO0oIqMgVy5ncGpq75hgeCl4-UKMY8'},
        {date:'25 March',text:'EQDCAfpTMlIh6xGABPSO0oIqMgVy5ncGpq75hgeCl4-UKMY8'},
        {date:'25 March',text:'EQDCAfpTMlIh6xGABPSO0oIqMgVy5ncGpq75hgeCl4-UKMY8'},
    ])
    return < >
        <View style = {Gstyles.home}>
            <Input onChange = {(e)=>setPast(e)} value = {past} placeholder = {'24-letter wallet address or TON DNS...'} height={80}/>
            <Text onPress={()=>fetchCopiedText()} style = {styles.past}>Paste</Text>
            <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style = {styles.text}>Recent</Text>
                <Text style = {styles.clear}>Clear</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator = {false}>
            {data.map((elm,i)=>{
                return <View key={i} style = {{paddingVertical:15,borderBottomWidth:1,borderColor:'#313131'}}>
                    <Text style = {[styles.text1,{marginBottom:5}]}>{elm.date}</Text>
                    <Text style = {styles.text}>{elm.text}</Text>
                </View>
            })}
            </ScrollView>
            {false && <ErrorPopUp  visible = {false}/>}
            <View style = {{marginVertical:20}}>
                <BlueButton onPress={()=>{
                    navigation.navigate('SendTo')
                    dispatch(SendToken(past))
                    }} loading={false} text={'Continue'} color = '#161616' backgroundColor="#4DFF7E" height={50} />
            </View>
        </View>
    </>
}