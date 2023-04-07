import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { Header } from './Components/Header';
import { HomeHeader } from './Components/Header/HomeHeader';
import { ConfirmPassword } from './Pages/ConfirmPassword';
import { ImportComplete } from './Pages/ImportComplelty';
import { InportStart } from './Pages/ImportStart';
import { Notifications } from './Pages/Notifications';
import { PopUp2 } from './Pages/PopUp2';
import { PopUpPage } from './Pages/PopUpPage';
import { SecurityNerdCheck } from './Pages/Securitynerdcheck';
import { SetPassword } from './Pages/SetPassword';
import { WalletCreadet } from './Pages/WalletCreated';
import { Wellcome } from './Pages/Wellcome';
import { WellDone } from './Pages/WellDone';
import { WhatADay } from './Pages/WhatADay';
import { YourRecoveryPhrase } from './Pages/YourRecoveryPhrase';
import NavigationMenu from './TabNavigation';
export default Navigatiob = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar
            backgroundColor="#161616"
        />
      <Stack.Navigator initialRouteName="NavigationMenu">
        <Stack.Screen
          name="welcome"
          component={Wellcome}
          options={{headerShown:false}}
        />
        <Stack.Screen
            name = 'WalletCreadet'
            component={WalletCreadet}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name = 'YourRecoveryPhrase'
            component={YourRecoveryPhrase}
            options={
              {
                header: ({navigation}) => (
                  <Header  onPress={() => navigation.goBack()}  />
                ),
              }
            }
        />
        <Stack.Screen
            name = 'popupPage'
            component={PopUpPage}
            options={
              {
                header: ({navigation}) => (
                  <Header  onPress={() => navigation.goBack()}  />
                ),
              }
            }
        />
        <Stack.Screen
            name = 'SecurityNerdCheck'
            component={SecurityNerdCheck}
            options={
              {
                header: ({navigation}) => (
                  <Header  onPress={() => navigation.goBack()}  />
                ),
              }
            }
        />
        <Stack.Screen
            name = 'SetPassword'
            component={SetPassword}
            options={
              {
                header: ({navigation}) => (
                  <Header  onPress={() => navigation.goBack()}  />
                ),
              }
            }
        />
        <Stack.Screen
            name = 'ConfirmPassword'
            component={ConfirmPassword}
            options={
              {
                header: ({navigation}) => (
                  <Header  onPress={() => navigation.goBack()}  />
                ),
              }
            }
        />
        <Stack.Screen
            name = 'WellDone'
            component={WellDone}
            options={{headerShown:false}}
           
        />
        <Stack.Screen
            name = 'Notifications'
            component={Notifications}
            options={{headerShown:false}}
        />
        <Stack.Screen
            name = 'InportStart'
            component={InportStart}
            options={
              {
                header: ({navigation}) => (
                  <Header  onPress={() => navigation.goBack()}  />
                ),
              }
            }
        />
        <Stack.Screen
            name = 'ImportComplete'
            component={ImportComplete}
            options={
              {
                header: ({navigation}) => (
                  <Header  onPress={() => navigation.goBack()}  />
                ),
              }
            }
        />
        <Stack.Screen
            name = 'WhatADay'
            component={WhatADay}
            options={
              {
                header: ({navigation}) => (
                  <Header  onPress={() => navigation.goBack()}  />
                ),
              }
            }
        />
        <Stack.Screen
            name = 'PopUp2'
            component={PopUp2}
            options={
              {
                header: ({navigation}) => (
                  <Header  onPress={() => navigation.goBack()}  />
                ),
              }
            }
        />
        <Stack.Screen
            name = 'NavigationMenu'
            component={NavigationMenu}
            options={
              {
                header: ({navigation}) => (
                  <HomeHeader  onPress={() => navigation.goBack()}  />
                ),
              }
            }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};