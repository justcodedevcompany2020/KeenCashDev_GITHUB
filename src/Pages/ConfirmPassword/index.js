import { useSelector } from "react-redux"
import { SetConfigPassword } from "../../Components/SetConfigPassword"

export const ConfirmPassword = ({navigation}) => {
  const {password} = useSelector((st)=>st)
    return <SetConfigPassword  navigation ={navigation} title={'confirm_password'} text = {`Enter the 4 digits in the passcode.`} Passwordcount = {password.password.length} />
}