import { View,ScrollView,Text,Dimensions } from "react-native"
import { Gstyles } from "../../Gstyle"
import { Svgs } from "../../Svg"
import { styles } from "./styles"

export const Setting = () => {
    const { width } = Dimensions.get('window');
    return <ScrollView style = {[Gstyles.home,]}>
        <View style = {{marginBottom:50}}>
        <Svgs title = {'settings_2'} />
        <View style = {styles.continer}>
            <View style = {styles.item}>
                <Text style = {styles.text}>Active address</Text>
                <Text style = {styles.text}>v4R2</Text>
            </View>
            <View style = {styles.item}>
                <Text style = {styles.text}>Notifications</Text>
                <Text style = {styles.text}>On</Text>
            </View>
            <View style = {styles.item}>
                <Text style = {styles.text}>Primary currency</Text>
                <Text style = {styles.text}>USD</Text>
            </View>
        </View>
        <View style = {styles.continer}>
            <View style = {styles.item}>
                <Text style = {styles.text}>Show recovery phrase</Text>
                <Svgs title={'>'} />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.text}>Change passcode</Text>
                <Svgs title={'>'} />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.text}>Reset passcode</Text>
                <Svgs title={'>'} />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.text}>Use Face recognition</Text>
                <Text style = {styles.text}>ON</Text>
            </View>
        </View>

        <View style = {styles.continer}>
            <View style = {styles.item}>
                <Text style = {styles.text}>Rate this app</Text>
                <Svgs title={'>'} />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.text}>Support chat</Text>
                <Svgs title={'>'} />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.text}>Telegram channel</Text>
                <Svgs title={'>'} />
            </View>
            <View style = {styles.item}>
                <Text style = {styles.text}>Legal</Text>
                <Svgs title={'>'} />
            </View>
        </View>
        <View style = {styles.continer}>
            <View style = {styles.item}>
                <Text style = {styles.text}>Log out</Text>
                <Svgs title={'>'} />
            </View>
         </View>  
         <View style = {[styles.continer,{marginTop:-10}]}>
            <View style = {styles.item}>
                <Text style = {styles.text}>Delete account</Text>
                <Svgs title={'>'} width ={width} />
            </View>
         </View>   
        </View>

    </ScrollView>
}