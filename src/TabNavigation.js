import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MenuNavigation } from './menuNavigation';
import { MainPage } from './Pages/MainPage';
import { NftListPage } from './Pages/NftListPage';
import { HomeSvg, Menu, QR } from './Svg';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ScanScreen from './Components/QRCodeScanner';
import { QrNavigation } from './QrNavigation';
import { HomeHeader } from './Components/Header/HomeHeader';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export default function NavigationMenu() {
    return (
      <BottomSheetModalProvider>
        <Tab.Navigator 
        screenOptions = {({route})=> ({
            header: ({navigation}) => (
                <HomeHeader navigation = {navigation} onPress={() => navigation.goBack()}  />
              ),
            tabBarShowLabel: false,
            // headerShown:false,
            tabBarStyle: ( () => { 
                const routeName = getFocusedRouteNameFromRoute(route) ?? ''
                return routeName == 'QrNavigation' ? {display: 'none'} : {height: 80,backgroundColor:'#161616',borderTopColor:'#000' ,borderTopWidth:1}
            })(route),
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
                name="QrNavigation"
                component={QrNavigation}
                options={()=>({
                    headerShown: false,
                    tabBarStyle:{display:'none'},
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