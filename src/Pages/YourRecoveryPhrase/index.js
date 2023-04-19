import {SafeAreaView,Text,View,ScrollView,Modal} from 'react-native'
import { useEffect,useState } from 'react'
import { Button } from '../../Components/Button.js'
import { Gstyles } from '../../Gstyle'
import { styles } from './styles.js'
import { PopUp } from '../../Components/PopUp/index.js'

export const YourRecoveryPhrase = ({navigation}) => {
    const item = [
        'reading',
        'this',
        'makes',
        'your',
        'eyes',
        'shining',
        'like',
        'diamond',
        'steel',
        'execution',
        'drift',
        'sparrow',
        'angel',
        'sidewalk',
        'tank',
        'space',
        'heart',
        'sun',
        'revolver',
        'redneck',
        'hatred',
        'snake  ',
        'collision',
        'hoverbike',
    ]
    const [click,setClick] = useState(0)
    const [accept,setAccept] = useState(false)
    useEffect(() => {
        setClick(0)
        setTimeout(() => {
            setAccept(true)
        }, 40000);
    },[]);
    const [open,setOpen] = useState(false)
    const handleCliclk = () => {
        setOpen(true)
        if(!accept){
            setOpen(true)
            setClick(click+1)
        }
        else{
            setOpen(false)
                navigation.navigate('SecurityNerdCheck')
        }
    }
    const PopUpClick = () =>{
        setTimeout(() => {
            navigation.navigate('SecurityNerdCheck') 
        },10)
        setOpen(false)
        setClick(0)
    }
    return <SafeAreaView  style = {[Gstyles.wrapper,styles.wrapper]}>
        <ScrollView showsVerticalScrollIndicator = {false}>
        <View style = {Gstyles.pop_up_centers}>
            {click == 1 ?
            <PopUp open ={open} onPress = {()=>setOpen(false)} title = {'Sure done?'}  text = {'You didn’t have enough time to write these words down.'} button_text ={'Ok, sorry'}/>
            :<PopUp open ={open} onPress = {()=>setOpen(false)} 
            title = {'Sure done?'} 
             text = {'You didn’t have enough time to write these words down.'} button_text ={'Ok, sorry'} 
             text_2 = {'Skip anyway'}
             onPress1 ={()=>PopUpClick()}
             />
            }
        </View>
        <View>
            <Text style ={[Gstyles.title,{marginVertical:10}]}>Your Recovery Phrase</Text>
            <Text style = {Gstyles.text}>Write down these 24 words in this exact order and keep them in a secure place.</Text>
            <Text style = {[Gstyles.text,{marginVertical:10}]}> Do not share this list with anyone. </Text>
            <Text style = {[Gstyles.text,{marginBottom:20}]}>If you lose it, you will irrevocably lose access to your TON account.</Text>
        </View>
        <View style = {styles.list}>
            {item.map((elm,i)=>(
                <View key={i} style = {styles.item}>
                    <Text ></Text>
                    <Text style = {styles.name}><Text style = {styles.number}>{i+1}.</Text> {elm}</Text>
                </View>
            ))}
        </View>
        <View style = {{marginVertical:40}}>
            <Button onPress={()=>handleCliclk()} title={'I saved it carefully'} />
        </View>
        </ScrollView>
    </SafeAreaView>
}