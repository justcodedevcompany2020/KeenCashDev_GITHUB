import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { Header } from './Components/Header';
import { Header1 } from './Components/Header/header2';
import { Header3 } from './Components/Header/header3';
import { HomeHeader } from './Components/Header/HomeHeader';
import { NameHEader } from './Components/Header/nameHeader';
import ScanScreen from './Components/QRCodeScanner';

import { Awesome } from './Pages/Awesome';
import { Confirm } from './Pages/Confirm';
import { ConfirmPassword } from './Pages/ConfirmPassword';
import { ConfirmPasswordForImport } from './Pages/confirmPasswordForImport';
import { ImportComplete } from './Pages/ImportComplelty';
import { InportStart } from './Pages/ImportStart';
import { MainPage } from './Pages/MainPage';
import { NftInfo } from './Pages/NftInfo';
import { PinPage } from './Pages/PinPage';
import { PinPageUser } from './Pages/PinPageUser';
import { PopUp2 } from './Pages/PopUp2';
import { PopUpPage } from './Pages/PopUpPage';
import { Resive } from './Pages/Receive';
import { SecurityNerdCheck } from './Pages/Securitynerdcheck';
import { Send } from './Pages/Send';
import { Sending } from './Pages/Sending';
import { SendTo } from './Pages/SendTo';
import { SetPassword } from './Pages/SetPassword';
import { SetPasswordForImport } from './Pages/setPasswordForImport';
import { Setting } from './Pages/Settings';
import { WalletCreadet } from './Pages/WalletCreated';
import { Wellcome } from './Pages/Wellcome';
import { WellDone } from './Pages/WellDone';
import { WhatADay } from './Pages/WhatADay';
import { YourRecoveryPhrase } from './Pages/YourRecoveryPhrase';
import { QrNavigation } from './QrNavigation';
import { clear_password } from './store/action/action';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import NavigationMenu from './TabNavigation';
import { PremissionAcces } from './Components/PremissionAcces';
export default Navigatiob = ({initialRouteName}) => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch()
  const MyTheme = {
    dark: false,
    colors: {
      primary: '#161616',
      background: '#000',
      border: '#161616',
    },
  };

  return (
    <BottomSheetModalProvider>
      <NavigationContainer theme ={MyTheme}>
        <StatusBar
              backgroundColor="#161616"
          />
        <Stack.Navigator initialRouteName={initialRouteName}>
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
                    <Header  onPress={() => 
                      navigation.goBack()}  />
                  ),
                }
              }
          />
          <Stack.Screen
              name = 'SetPasswordForImport'
              component={SetPasswordForImport}
              options={
                {
                  header: ({navigation}) => (
                    <Header  onPress={() => 
                      navigation.goBack()}  />
                  ),
                }
              }
          />
          {/* ConfirmPasswordForImport */}
          <Stack.Screen
              name = 'ConfirmPassword'
              component={ConfirmPassword}
              options={
                {
                  header: ({navigation}) => (
                    <Header  onPress={() => {
                      dispatch(clear_password())
                      navigation.goBack()}  }/>
                  ),
                }
              }
          />
          <Stack.Screen
              name = 'ConfirmPasswordForImport'
              component={ConfirmPasswordForImport}
              options={
                {
                  header: ({navigation}) => (
                    <Header  onPress={() => {
                      dispatch(clear_password())
                      navigation.goBack()}  }/>
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
              options={{headerShown:false}}
              // options={
              //   {
              //     header: ({navigation}) => (
              //       <Header  onPress={() => navigation.goBack()}  />
              //     ),
              //   }
              // }
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
              component={MainPage}
              // options={
              //   {
              //   headerShown: false
              //   }
              options = {{
                header: ({navigation}) => (
                  <HomeHeader navigation = {navigation} onPress={() => navigation.goBack()}  />
                ),
              }}
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
                  <Header3  onPress1={() => navigation.navigate('ScanScreen')} onPress={() => navigation.goBack()}  />
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
                  <Header1 text = {'Send to:'} onPress={() => navigation.goBack()}  />
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
            name="PinPageUser"
            component={PinPageUser}
            options={{headerShown:false}}
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
          <Stack.Screen 
            name="Settings"
            component={Setting}
            options={
              {
                header: ({navigation}) => {
                  const routes = navigation.getState()?.routes;
                  const prevRoute = routes[routes.length - 2]
                  return <Header1 navigation = {navigation} onPress = {()=>prevRoute.name === 'QrNavigation'?navigation.navigate('NavigationMenu'):navigation.goBack()}/>
                }

                ,
              }
          }
          />
          <Stack.Screen 
            name="QrNavigation"
            component={ScanScreen}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name="PremissionAcces"
            component={PremissionAcces}
            options={{headerShown:false}}
          />
          {/* <Stack.Screen 
            name="QrNavigation"
            component={QrNavigation}
            options={{headerShown:false}}
          /> */}
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
};
