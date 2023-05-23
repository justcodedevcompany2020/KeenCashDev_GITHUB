import { useSelector } from "react-redux"
import { SetConfigPassword } from "../../Components/SetConfigPassword"

export const ConfirmPasswordForImport = ({navigation}) => {
  const {password} = useSelector((st)=>st)
  console.log('899')
    return <SetConfigPassword  
      navigation ={navigation} 
      title={'confirm_password'} 
      text = {`Enter the 4 digits in the passcode.`} 
      Passwordcount = {password.password.length}
      type = {'confirmforImport'} 
    />
}