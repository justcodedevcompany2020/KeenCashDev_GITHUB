import {View,Text} from 'react-native'
import { Button } from '../../Components/Button.js'
import { Input } from '../../Components/Input'
import { Gstyles } from '../../Gstyle'

export const SecurityNerdCheck = ({navigation}) => {
    const input = [
        {value:''},
        {value:''},
        {value:''},
    ]
    return <View style = {[Gstyles.wrapper,Gstyles.wrapper2]}>
        <View >
            <Text style= {[Gstyles.title,{marginBottom:10}]}>Security nerd check!</Text>
            <Text  style= {Gstyles.text}>Let’s check that you wrote them down correctly. Please enter the words 5, 15 and 18.</Text>
        </View>
        <View>
            {
                input.map((elm,i)=>(
                    <View key={i} style = {{marginVertical:10}}>
                        <Input  id = {i+1} />
                    </View>
                ))
            }
        </View>
        <View>
            <Button title={'Continue'} onPress ={()=>navigation.navigate('SetPassword')} /> 
        </View>
    </View>
}