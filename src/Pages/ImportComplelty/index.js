import {View,Text} from 'react-native'
import { SuccessScreen } from '../../Components/SuccessScreen'
import { Gstyles } from '../../Gstyle'

export const ImportComplete = ({navigation}) => {
    return <View style = {Gstyles.wrapper}>
        <SuccessScreen onPress={()=>{}} title = 'import_complete' button_title='View my wallet' >
            <Text style = {Gstyles.text}>Your wallet has just been imported</Text>
        </SuccessScreen>
    </View>
}