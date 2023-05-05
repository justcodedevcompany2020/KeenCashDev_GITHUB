import {View,StatusBar,TouchableOpacity,Text} from 'react-native'
import {styles} from './styles'
import { Gstyles } from '../../Gstyle'
import { Svgs } from '../../Svg'
import { useDispatch } from 'react-redux'
import { create_wallet } from '../../store/action/action'
export const Wellcome = ({navigation}) => {
  const dispathc = useDispatch()
  const CreateWallet = () =>{
    dispathc(create_wallet())
    navigation.navigate('WalletCreadet')
  }
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
        <TouchableOpacity onPress={()=>{CreateWallet()}}  style = {styles.button}>
            <Text style = {styles.button_text}>Create new TON wallet</Text>
        </TouchableOpacity>
        <Text onPress={()=>navigation.navigate('InportStart')} style = {styles.text}>Import existing TON wallet</Text>
      </View>
    </View>
}
