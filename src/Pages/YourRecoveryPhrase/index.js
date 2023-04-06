import {SafeAreaView,Text,View,ScrollView} from 'react-native'
import { useEffect,useState } from 'react'
import { Button } from '../../Components/Button.js'
import { Gstyles } from '../../Gstyle'
import { styles } from './styles.js'

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
    const [click,setClick] = useState(1)
    const [accept,setAccept] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setAccept(true)
        }, 40000);
    });
    const handleCliclk = () => {
        setClick(click+1)
        if(!accept &&click===1){
            navigation.navigate('popupPage')
        }
        else if(!accept&&click >= 2){
            console.log()
            navigation.navigate('PopUp2')
        }
    }
    return <SafeAreaView style = {[Gstyles.wrapper,styles.wrapper]}>
        <ScrollView>
        <View>
            <Text style ={[Gstyles.title,{marginVertical:10}]}>Your Recovery Phrase</Text>
            <Text style = {Gstyles.text}>Write down these 24 words in this exact order and keep them in a secure place.</Text>
            <Text style = {[Gstyles.text,{marginVertical:10}]}> Do not share this list with anyone. </Text>
            <Text style = {Gstyles.text}>If you lose it, you will irrevocably lose access to your TON account.</Text>
        </View>
        <View style = {styles.list}>
            {item.map((elm,i)=>(
                <View key={i} style = {styles.item}>
                    <Text ></Text>
                    <Text style = {styles.name}><Text style = {styles.number}>{i+1}.</Text> {elm}</Text>
                </View>
            ))}
        </View>
        <View style = {{marginBottom:20}}>
            <Button onPress={()=>handleCliclk()} title={'I saved it carefully'} />
        </View>
        </ScrollView>
    </SafeAreaView>
}