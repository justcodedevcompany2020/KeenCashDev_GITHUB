import 'react-native-gesture-handler';
import Navigation from './src/Navigation'
import {Provider} from 'react-redux';
import {store} from './src/store/configStore';
export default App = () => {

  return <Provider store={store}>
      <Navigation/>
   </Provider>
}