import { View ,Text,Image, TouchableOpacity} from "react-native"
import { useDispatch } from "react-redux"
import { nftInfo } from "../../store/action/action"
import {styles} from  './styles'

export const NftCard = ({img,title,text,navigation}) => {
    const dispatch = useDispatch()
    return <TouchableOpacity onPress={()=>{
            dispatch(nftInfo(img,title,text))
            navigation.navigate('nftinfo')
        }}  style = {{width:'49%',marginBottom:10}}>
        <Image source={img} style = {styles.img} />
        <View  style = {styles.title}>
            <Text style = {{color:'#8A8A8A',fontSize:13,fontWeight:300}}>{title}</Text>
            <Text style = {{color:'#EAEAEA',fontSize:13,fontWeight:400}}>{text}</Text>
        </View>
    </TouchableOpacity>
}