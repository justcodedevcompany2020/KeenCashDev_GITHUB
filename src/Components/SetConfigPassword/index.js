import {View,Text,TextInput,TouchableOpacity} from 'react-native'
import {useState,useRef} from 'react'
import { Gstyles } from '../../Gstyle'
import { Svgs } from '../../Svg'
import { styles } from './styles'

export const SetConfigPassword = ({title,text,options}) =>{
    const lastNameRef = useRef();
    const lastNameRef2 = useRef();
    const lastNameRef3 = useRef();
    const lastNameRef4 = useRef();
    const lastNameRef5 = useRef();
    const lastNameRef6 = useRef();
    const [password,setPassword] = useState([
        {value:'',active:false},
        {value:'',active:false},
        {value:'',active:false},
        {value:'',active:false},
        {value:'',active:false},
        {value:'',active:false},
    ])
    const [passwordLength,setPasswordLength] = useState(4)
    const HandleChange = (i,value) => {
        let item = [...password]
        item[i].value =value
        item[i].active = true
        setPassword(item)
    }
    const changePasswordLength = () => {
        let item = [...password]
        item.map((elm,i)=>{
            elm.value = ''
            elm.active = false
        })
        setPassword(item)
    }
    const [opt,setOpt] = useState(false)
    return <View style  ={[Gstyles.wrapper,Gstyles.wrapper2]}>
        <View>
            <Svgs title={title} />
            <Text style = {[Gstyles.text,{marginTop:10}]}>{text}</Text>
        </View>
        {!opt ?  
            <View style = {styles.password_continer}>
                <TextInput  
                    style = {[styles.input,password[0].active && {backgroundColor:'#4DFF7E'}]}
                    autoFocus 
                    keyboardType='number-pad'
                    ref ={lastNameRef}
                    maxLength ={1}
                    onChange={(e) => {
                        HandleChange(0,e)
                        lastNameRef2.current.focus();
                    }}
                />
                <TextInput  
                    style = {[styles.input,password[1].active && {backgroundColor:'#4DFF7E'}]} 
                    keyboardType='number-pad'
                    ref ={lastNameRef2}
                    maxLength ={1}
                    onChange={(e) => {
                        HandleChange(1,e)
                        lastNameRef3.current.focus();
                    }}
                />
                <TextInput  
                    style = {[styles.input,password[2].active && {backgroundColor:'#4DFF7E'}]} 
                    keyboardType='number-pad'
                    ref ={lastNameRef3}
                    maxLength ={1}
                    onChange={(e) => {
                        HandleChange(2,e)
                        lastNameRef4.current.focus();
                    }}
                />
                <TextInput  
                    style = {[styles.input,password[3].active && {backgroundColor:'#4DFF7E'}]} 
                    keyboardType='number-pad'
                    ref ={lastNameRef4}
                    maxLength ={1}
                    onChange={(e) => {
                        HandleChange(3,e)
                        passwordLength === 6 && lastNameRef5.current.focus();
                    }}
                />
                {passwordLength === 6 &&
                    <TextInput  
                    style = {[styles.input,password[4].active && {backgroundColor:'#4DFF7E'}]} 
                    keyboardType='number-pad'
                    ref ={lastNameRef5}
                    maxLength ={1}
                    onChange={(e) => {
                        HandleChange(4,e)
                        lastNameRef6.current.focus();
                    }}
                />
                }
                {passwordLength === 6 &&
                    <TextInput  
                    style = {[styles.input,password[5].active && {backgroundColor:'#4DFF7E'}]} 
                    keyboardType='number-pad'
                    ref ={lastNameRef6}
                    maxLength ={1}
                    onChange={(e) => {
                        HandleChange(5,e)
                    }}
                />
                }
            </View>:
            <View style ={{alignItems:'center'}}>
                <View style = {styles.opt}>
                    <TouchableOpacity style= {[styles.touchableOpacity,{borderBottomWidth:1,borderColor:'#C8C7CB'}]} 
                    onPress ={()=>
                        {
                            changePasswordLength() 
                            setPasswordLength(4)
                            setOpt(false)
                        }
                       
                        } 
                    >
                        <Text style= {styles.text}>4-digit code</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style = {styles.touchableOpacity} onPress ={()=>
                        {
                            changePasswordLength() 
                            setPasswordLength(6)
                            setOpt(false)
                        }
                       
                        } >
                        <Text style= {styles.text}>6-digit code</Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
        <View>
            <Text onPress={()=>setOpt(true)} style = {[Gstyles.text,{fontWeight:600}]}>
                {options}
            </Text>
        </View>
    </View>
}