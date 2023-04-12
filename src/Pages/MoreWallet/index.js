import { View,Text } from "react-native"
import { BlueButton } from "../../Components/Button.js/BlueButton"
import { Gstyles } from "../../Gstyle"
import { Svgs } from "../../Svg"

export const MoreWallet = () => {
    return <View style = {[Gstyles.homeWrapper,{justifyContent:'center'}]}>
        <View style = {{alignItems:'center'}}>
            <Svgs title={'more_wallet'}/>
            <Text style = {[Gstyles.text,{marginVertical:20}]}>
                Sure thing! You can add more TON wallets.Uh, why don’t others have this?
            </Text>
        </View>
        <View>
            <BlueButton   height={70} text = 'Create new TON wallet' />
            <Text style = {{color:'#FFFFFF',textAlign:'center',marginTop:20,fontSize:15,fontWeight:600}}>Import existing TON wallet</Text>
        </View>
    </View>
}