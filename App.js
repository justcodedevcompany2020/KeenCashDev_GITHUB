import 'react-native-gesture-handler';
import Navigation from './src/Navigation'
import {Provider} from 'react-redux';
import {store} from './src/store/configStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect,useState} from 'react'
export default App = () => {
   const [initialRouteName,setInitialRouteName] = useState('')
   const [isLoading, setIsLoading] = useState(true);
   async function getData() {
      const data = await AsyncStorage.getItem('token')
      if (data) {
        setInitialRouteName('PinPageUser');
      } 
      else setInitialRouteName('welcome')
      setIsLoading(false)
    }
   useEffect(()=>{
      getData()
   },[])
  return (isLoading ?null:
   <Provider Provider store={store}>
      <Navigation initialRouteName ={initialRouteName} />
   </Provider>)
}