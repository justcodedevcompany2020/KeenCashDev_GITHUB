import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { Header } from './Components/Header';
import { Header1 } from './Components/Header/header2';
import { Header3 } from './Components/Header/header3';
import { HomeHeader } from './Components/Header/HomeHeader';
import { NameHEader } from './Components/Header/nameHeader';
import { Awesome } from './Pages/Awesome';
import { Confirm } from './Pages/Confirm';
import { ConfirmPassword } from './Pages/ConfirmPassword';
import { ImportComplete } from './Pages/ImportComplelty';
import { InportStart } from './Pages/ImportStart';
import { NftInfo } from './Pages/NftInfo';
import { Notifications } from './Pages/Notifications';
import { PinPage } from './Pages/PinPage';
import { PopUp2 } from './Pages/PopUp2';
import { PopUpPage } from './Pages/PopUpPage';
import { Resive } from './Pages/Receive';
import { SecurityNerdCheck } from './Pages/Securitynerdcheck';
import { Send } from './Pages/Send';
import { Sending } from './Pages/Sending';
import { SendTo } from './Pages/SendTo';
import { SetPassword } from './Pages/SetPassword';
import { WalletCreadet } from './Pages/WalletCreated';
import { Wellcome } from './Pages/Wellcome';
import { WellDone } from './Pages/WellDone';
import { WhatADay } from './Pages/WhatADay';
import { YourRecoveryPhrase } from './Pages/YourRecoveryPhrase';
import NavigationMenu from './TabNavigation';
export default Navigatiob = () => {
  const Stack = createStackNavigator();
  const MyTheme = {
    dark: false,
    colors: {
      primary: '#161616',
      background: '#000',
      border: '#161616',
    },
  };
  return (
    <NavigationContainer 
    
    theme ={MyTheme}
    >
      <StatusBar
            backgroundColor="#161616"
        />
      <Stack.Navigator initialRouteName="SendTo">
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
        <Stack.Screen 
          name="nftinfo"
          component={NftInfo}
          options={
            {
              header: ({navigation}) => (
                <Header1  onPress={() => navigation.goBack()}  />
              ),
            }
        }
        />
         <Stack.Screen 
          name="recive"
          component={Resive}
          options={
            {
              header: ({navigation}) => (
                <Header1  onPress={() => navigation.goBack()}  />
              ),
            }
        }
        />
        <Stack.Screen 
          name="send"
          component={Send}
          options={
            {
              header: ({navigation}) => (
                <Header3  onPress={() => navigation.goBack()}  />
              ),
            }
        }
        />
        <Stack.Screen 
          name="SendTo"
          component={SendTo}
          options={
            {
              header: ({navigation}) => (
                <Header3  text = {'Send to:'} onPress={() => navigation.goBack()}  />
              ),
            }
        }
        />
        <Stack.Screen 
          name="Confirm"
          component={Confirm}
          options={
            {
              header: ({navigation}) => (
                <Header1 text = 'Send to' onPress={() => navigation.goBack()}  />
              ),
            }
        }
        />
        <Stack.Screen 
          name="PinPage"
          component={PinPage}
          options={
            {
              header: ({navigation}) => (
                <Header1  onPress={() => navigation.goBack()}  />
              ),
            }
        }
        />
        <Stack.Screen 
          name="Sending"
          component={Sending}
          options={
            {
              header: ({navigation}) => (
                <NameHEader name = {'Sending...'}/>
              ),
            }
        }
        />
        <Stack.Screen 
          name="Awesome"
          component={Awesome}
          options={
            {
              header: ({navigation}) => (
                <NameHEader name = {'Success!'}/>
              ),
            }
        }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// Sending
// Awesome