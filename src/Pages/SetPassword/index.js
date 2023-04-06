import { View } from "react-native"
import { SetConfigPassword } from "../../Components/SetConfigPassword"

export  const SetPassword = () => {
    return <View >
        <SetConfigPassword options={'Passcode options'} title={'set_password'} text = {'Enter the 4 digits in the passcode.'} />
    </View>
}