import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MenuNavigation } from './menuNavigation';
import { MainPage } from './Pages/MainPage';
import { NftListPage } from './Pages/NftListPage';
import { HomeSvg, Menu, QR } from './Svg';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const Tab = createBottomTabNavigator();
export default function NavigationMenu() {
    return (
      <BottomSheetModalProvider>

        <Tab.Navigator 
        screenOptions = {()=> ({
            tabBarShowLabel: false,
            headerShown:false,
            tabBarStyle: { height: 80,backgroundColor:'#161616',borderTopColor:'#000' ,borderTopWidth:1},
        })}
        >
            <Tab.Screen 
                name="Main"
                component={MainPage}
                options={()=>({
                    tabBarIcon:({focused})=> <HomeSvg focused={focused} />
                })}
            />
            <Tab.Screen 
                name="Code"
                component={MainPage}
                options={()=>({
                    tabBarIcon:({focused})=> <QR focused={focused} />
                })}
                
            />
            <Tab.Screen 
                name="menunavigation"
                component={MenuNavigation}
                options={{
                    tabBarIcon:({focused})=> <Menu focused={focused} />
                }}
            />
        </Tab.Navigator>
      </BottomSheetModalProvider>

    )
}   