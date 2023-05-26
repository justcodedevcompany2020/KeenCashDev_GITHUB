import { createStackNavigator } from "@react-navigation/stack";
import { PremissionAcces } from "./Components/PremissionAcces";
import ScanScreen from "./Components/QRCodeScanner";

export const QrNavigation = () => {
  const Stack = createStackNavigator();
    return <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen 
            name="ScanScreen"
            component={ScanScreen}
            options={{headerShown:false}}
        />
          <Stack.Screen 
            name="PremissionAcces"
            component={PremissionAcces}
            options={{headerShown:false}}
        />
    </Stack.Navigator>
}
// PremissionAcces