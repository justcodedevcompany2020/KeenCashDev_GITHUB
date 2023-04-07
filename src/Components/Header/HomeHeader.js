import { View,Text } from "react-native"
import { styles } from './styles'

import { Svgs } from "../../Svg"
import { useSelector } from "react-redux"
import {  } from "react-native-svg"

export const HomeHeader = () => {
    const {header} = useSelector((st)=>st)
    return <View style = {styles.home_header}>
        {header.price ==='' && header.price_$ ==='' ?
            <Svgs title={'home_header'} />:
            <View style = {styles.new_header}>
                <Text style = {styles.new_price}>{header.price} </Text>
                <Text style = {styles.new_price$}> ≈ {header.price_$ }</Text>
            </View>
        }
        <Svgs title={'settings'} />
    </View>
}