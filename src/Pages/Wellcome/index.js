import {View,StatusBar,TouchableOpacity,Text} from 'react-native'
import {styles} from './styles'
import { Gstyles } from '../../Gstyle'
import { Svgs } from '../../Svg'
export const Wellcome = ({navigation}) => {
    return <View style = {Gstyles.welcome} >
        <StatusBar
        backgroundColor="#4DFF7E"
        barStyle = {'dark-content'}
        />
      <View style = {styles.header}>
        <Svgs title = {'welcome'} />
      </View>
      <View >
        <Svgs title = {'non'} />
      </View>
      <View style = {styles.button_wrapper}>
        <TouchableOpacity onPress={()=>navigation.navigate('WalletCreadet')}  style = {styles.button}>
            <Text style = {styles.button_text}>Create new TON wallet</Text>
        </TouchableOpacity>
        <Text onPress={()=>navigation.navigate('InportStart')} style = {styles.text}>Import existing TON wallet</Text>
      </View>
    </View>
}
