import { createStackNavigator } from "@react-navigation/stack";
import { NftInfo } from "./Pages/NftInfo";
import { NftListPage } from "./Pages/NftListPage";

export const MenuNavigation = () => {
  const Stack = createStackNavigator();
    return <Stack.Navigator >
        <Stack.Screen 
          name="NftListPage"
          component={NftListPage}
          options={{headerShown:false}}
        />
        
    </Stack.Navigator>
}