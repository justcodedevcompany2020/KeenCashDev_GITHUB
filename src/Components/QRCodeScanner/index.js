import React, { Fragment,useState} from 'react';
import {
  TouchableOpacity,
  Text,
  Linking,
  View,
  ImageBackground,

} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from './styles';
import {Svgs} from '../../Svg';
import {PremissionAcces} from '../PremissionAcces';
const ScanScreen = ({navigation}) => {
  const [scan, setScan] = useState(true);
  const [scanResult, setScanResult] = useState(false);
  const [result, setResult] = useState(null);
  const [permision, setPermision] = useState(true);

  const [flashMode, setFlashMode] = useState(
    RNCamera.Constants.FlashMode.torch,
  );
  const flash = () => {
    if (flashMode === RNCamera.Constants.FlashMode.torch) {
      setFlashMode(RNCamera.Constants.FlashMode.off);
    } else {
      setFlashMode(RNCamera.Constants.FlashMode.torch);
    }
  };
  const onSuccess = e => {
    const check = e.data.substring(0, 4);
    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    }
  };
  activeQR = () => {
    setScan(true);
  };
  scanAgain = () => {
    setScan(true);
    setResult(true);
  };
  return (
    <View style={styles.scrollViewStyle}>
      <Fragment>
        <QRCodeScanner
          flashMode={flashMode}
          reactivate={true}
          showMarker={true}
          notAuthorizedView={
            <PremissionAcces
              navigation={navigation}
              permision={e => setPermision(e)}
            />
          }
          cameraStyle={{width: '100%', height: '100%'}}

          customMarker={
            <ImageBackground
            source={require('../../img/blurBG.png')}
            style={{marginBottom: 60,
                shadowColor:"#fff",
                shadowOffset: {height: 20, width: 20},
                width:'100%',
                height:'110%'
            }}>
            </ImageBackground>
          }
          ref={node => {
            scanner = node;
          }}
          onRead={onSuccess}
          bottomContent={
            permision ? (
              <View
                style={{
                  position: 'absolute',
                  bottom: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => flash()}
                  style={{marginBottom: 20}}>
                  <Svgs title={'flash'} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.goBack('')}
                  style={{
                    backgroundColor: '#313131',
                    width: 200,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                  }}>
                  <Text
                    style={{color: '#FFFFFF', fontFamily:'Lexend-SemiBold', fontSize: 15}}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              ''
            )
          }
        />
      </Fragment>
    </View>
  );
};
export default ScanScreen;
