import { View ,Text,ScrollView} from "react-native"
import {styles} from './styles'
import { Input } from "../../Components/Input"
import { Gstyles } from "../../Gstyle"
import { useState,useEffect } from "react"
import { BlueButton } from "../../Components/Button.js/BlueButton"
import { ErrorPopUp } from "../../Components/ErrorPopUp"
import { check_accaunt, clear_error_check_account, SendToken } from "../../store/action/action"
import { useDispatch, useSelector } from "react-redux"
export const Send = ({navigation}) => {
    const {check} = useSelector(st=>st)
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
    const hadnelPress = () =>{
        dispatch(check_accaunt(past))
    }
    useEffect(()=>{
        if(check.status === 'checked'){
            dispatch(SendToken(past))
            navigation.navigate('SendTo')
        }
    },[check.status])
    useEffect(()=>{

    },[])
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            dispatch(clear_error_check_account())
        });
        return unsubscribe;
      }, [navigation]);
    return < >
        <ScrollView showsVerticalScrollIndicator = {false} style = {Gstyles.home}>
            <Input 
                active = {true} 
                onChange = {(e)=>setPast(e)} 
                value = {past} 
                multiline = {false}
                placeholder = {'24-letter wallet address or TON DNS...'} 
                height={80}
                font = "Lexend-Regular"
                handelSubmit = {()=>{
                    hadnelPress()
                    // dispatch(SendToken(past))
                    // navigation.navigate('SendTo')
                }
                }
            />
            <Text onPress={()=>fetchCopiedText()} style = {styles.past}>Paste</Text>
            <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style = {styles.text}>Recent</Text>
                <Text style = {styles.clear}>Clear</Text>
            </View>
            <View>
            {data.map((elm,i)=>{
                return <View key={i} style = {[{paddingVertical:15,borderBottomWidth:1,borderColor:'#313131'},i===data.length-1&&{marginBottom:35} ]}>
                    <Text style = {[styles.text1,{marginBottom:5}]}>{elm.date}</Text>
                    <Text style = {styles.text}>{elm.text}</Text>
                </View>
            })}
            </View>
        </ScrollView>
        <View style = {{paddingHorizontal:20,backgroundColor:'#161616',}}>
            {check.status === 'error_checked' && <ErrorPopUp  />}
            <View style = {{marginVertical:20}}>
                <BlueButton  onPress={()=>{
                    hadnelPress()
                    }} loading={check.loading} text={'Continue'} color = '#161616' backgroundColor="#4DFF7E" height={50} />
            </View>
        </View>
    </>
}