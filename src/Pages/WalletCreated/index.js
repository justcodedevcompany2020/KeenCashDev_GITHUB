import {View,Text,StatusBar} from 'react-native'
import { SuccessScreen } from '../../Components/SuccessScreen'
import { Gstyles } from '../../Gstyle'
export const WalletCreadet = ({navigation}) => {
    return <View style = {Gstyles.wrapper}>
        <StatusBar
            backgroundColor="#000"
        />
        <SuccessScreen onPress = {()=>navigation.navigate('YourRecoveryPhrase')} title={'wallet_created'} >
            <View>
                <Text style = {[Gstyles.text,{marginBottom:10}]}>Only you control it.</Text>
                <Text style = {Gstyles.text}>Please  save  secret words carefully and set up a secure passcode.</Text>
            </View>
        </SuccessScreen>
    </View>
}