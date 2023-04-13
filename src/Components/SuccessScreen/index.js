import { View,Text } from "react-native"
import { Svgs } from "../../Svg"
import { Button } from "../Button.js"
import { styles } from "./styles"

export const SuccessScreen = ({children,title,onPress,button_title='Proceed to secret words',opt,onPress2}) => {
    return <View style = {styles.success_screen}>
        <View></View>
        <View>
            <View style = {{marginBottom:10}}>
                <Svgs title={title} />
            </View>
            {children}
        </View>
        <View style = {{marginBottom:40}}>
            <Button onPress ={onPress} title={button_title} />
           {opt&& <View>
                <Text onPress={onPress2} style = {styles.opt}>{opt}</Text>
            </View>}
        </View>
    </View>
}