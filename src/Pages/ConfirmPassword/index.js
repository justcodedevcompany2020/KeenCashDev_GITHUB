import { SetConfigPassword } from "../../Components/SetConfigPassword"

export const ConfirmPassword = ({navigation}) => {
    return <SetConfigPassword navigation ={navigation} title={'confirm_password'} text = {'Enter the 4 digits in the passcode.'} />
}