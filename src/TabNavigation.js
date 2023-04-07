import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainPage } from './Pages/MainPage';
import { HomeSvg, Menu, QR } from './Svg';
const Tab = createBottomTabNavigator();
export default function NavigationMenu() {
    return (
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
                component={''}
                options={()=>({
                    tabBarIcon:({focused})=> <QR focused={focused} />
                })}
                
            />
            <Tab.Screen 
                name="Menu"
                component={''}
                options={{
                    tabBarIcon:({focused})=> <Menu focused={focused} />
                }}
            />
        </Tab.Navigator>
    )
}   