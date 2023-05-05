import {useState} from 'react'
import { View,Text,TouchableOpacity } from "react-native"
import { Gstyles } from "../../Gstyle"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style'
import { Svgs } from "../../Svg"
export const PinPage =({navigation,title = 'Awesome'}) => {
    const [pin,setPin] = useState([
        {key:''},
        {key:''},
        {key:''},
        {key:''},
    ])

    const [count,setCoint] = useState(0)
    const handelClick = async(number) => {
        let item = [...pin]
        if(number !== 'd'){
            if(count <4){
                item[count].key = number 
                setCoint(count+1)
            }
        }
        else {
            if(count !== 0){
                item[count-1].key = ''
                setCoint(count-1)
            }
        }
        if(count == 3){
            if(title === 'Awesome'){
                navigation.navigate('Awesome')
            }
            else if(title === 'NavigationMenu') {
                let code = await AsyncStorage.getItem('passcode')
                let code2 = ''
                pin.map((elm,i)=>{
                    code2 += elm.key
                })
                if(code2 === code){
                    navigation.navigate('NavigationMenu')
                }
                else {
                    item.map((elm,i)=>{
                        elm.key = ''
                    })
                    setCoint(0)
                    setPin(item)
                }
            }
        }
        setPin(item)
    }
    return <View style = {[Gstyles.home,title === 'NavigationMenu' && {justifyContent:'center'}]}>
        <View style = {{justifyContent:'center',alignItems:'center'}}>
            <Svgs title={'diamond'} />
        </View>
        <View style = {{marginVertical:20}}>
        <Text style = {{color:'#EAEAEA',textAlign:'center',fontSize:15,fontFamily:"Lexend-Medium",marginVertical:0}}>Enter your keen.cash wallet passcode</Text>
        <View style = {{justifyContent:'center',alignItems:'center',flexDirection:'row',marginVertical:20}}>
            {pin.map((elm,i)=>{
                if(elm.key === ''){
                  return  <View key={i} style = {styles.pin}></View>
                }
                else {
                   return <View key={i} style = {styles.activePin}></View>
                }
            })}
        </View>
        </View>
        <View style = {{marginTop:20,flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity style = {styles.button} onPress ={()=>handelClick(1)}>
                <Text style = {styles.number}>1</Text>
                <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress ={()=>handelClick(2)}>
                <Text style = {styles.number}>2</Text>
                <Text style = {styles.abc}>ABC</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress ={()=>handelClick(3)}>
                <Text style = {styles.number}>3</Text>
                <Text style = {styles.abc}>DEF</Text>
            </TouchableOpacity>
        </View>
        <View style = {{marginTop:20,flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity style = {styles.button} onPress ={()=>handelClick(4)}>
                <Text style = {styles.number}>4</Text>
                <Text  style = {styles.abc}>GHI</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress ={()=>handelClick(5)}>
                <Text style = {styles.number}>5</Text>
                <Text style = {styles.abc}>JKL</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress ={()=>handelClick(6)}>
                <Text style = {styles.number}>6</Text>
                <Text style = {styles.abc}>MNO</Text>
            </TouchableOpacity>
        </View>
        <View style = {{marginTop:20,flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity style = {styles.button} onPress ={()=>handelClick(7)}>
                <Text style = {styles.number}>7</Text>
                <Text  style = {styles.abc}>PQRS</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress ={()=>handelClick(8)}>
                <Text style = {styles.number}>8</Text>
                <Text style = {styles.abc}>TUV</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress ={()=>handelClick(9)}>
                <Text style = {styles.number}>9</Text>
                <Text style = {styles.abc}>WXYZ</Text>
            </TouchableOpacity>
        </View>
        <View style = {{marginTop:20,flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity style = {styles.button}>
                <Svgs  title={'face_id'} />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress ={()=>handelClick(0)}>
                <Text style = {styles.number}>0</Text>
                <Text style = {styles.abc}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}  onPress ={()=>handelClick('d')}>
                <Svgs title={'clear_pin'} />
            </TouchableOpacity>
        </View>
    </View>
}