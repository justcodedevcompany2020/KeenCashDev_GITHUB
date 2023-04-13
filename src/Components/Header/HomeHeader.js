import { View,Text,TouchableOpacity } from "react-native"
import { styles } from './styles'

import { Svgs } from "../../Svg"
import { useSelector } from "react-redux"
import {  } from "react-native-svg"
import {  } from "@gorhom/bottom-sheet"

export const HomeHeader = ({navigation}) => {
    const {header} = useSelector((st)=>st)
    return <View style = {styles.home_header}>
        {header.price ==='' && header.price_$ ==='' ?
            <Svgs title={'home_header'} />:
            <View style = {styles.new_header}>
                <Text style = {styles.new_price}>{header.price} </Text>
                <Text style = {styles.new_price$}> ≈ {header.price_$ }</Text>
            </View>
        }
        <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
            <Svgs  title={'settings'} />
        </TouchableOpacity>
    </View>
}