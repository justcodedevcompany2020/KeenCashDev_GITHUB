import React, {Component, Fragment, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  Linking,
  View,
  Image,
  ImageBackground,
  BackHandler,
  StyleSheet,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from './styles';
import {Svgs} from '../../Svg';
import {PremissionAcces} from '../PremissionAcces';
const ScanScreen = ({navigation}) => {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         scan: true,
  //         ScanResult: false,
  //         result: null,
  //         flashMode:false
  //     };
  // }

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
    console.log('scanned data' + check);
    // this.setState({
    //     result: e,
    //     scan: false,
    //     ScanResult: true
    // })
    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    }
    // else {
    //     this.setState({
    //         result: e,
    //         scan: false,
    //         ScanResult: true
    //     })
    // }
  };
  activeQR = () => {
    setScan(true);
    // this.setState({ scan: true })
  };
  scanAgain = () => {
    setScan(true);
    setResult(true);
    // this.setState({ scan: true, ScanResult: false })
  };
  // const { scan, ScanResult, result } = this.state
  return (
    <View style={styles.scrollViewStyle}>
      <Fragment>
        {/* <View style={styles.header}>
                        <TouchableOpacity onPress={()=> BackHandler.exitApp()}>
                            <Image source={require('./assets/back.png')} style={{height: 36, width: 36}}></Image>
                        </TouchableOpacity>
                        <Text style={styles.textTitle}>Scan QR Code</Text>
                    </View> */}
        {/* <View style={styles.cardView} >
                            <Image source={require('./assets/camera.png')} style={{height: 36, width: 36}}></Image>
                            <Text numberOfLines={8} style={styles.descText}>Please move your camera {"\n"} over the QR Code</Text>
                            <Image source={require('./assets/qr-code.png')} style={{margin: 20}}></Image>
                            <TouchableOpacity onPress={this.activeQR} style={styles.buttonScan}>
                                <View style={styles.buttonWrapper}>
                                <Image source={require('./assets/camera.png')} style={{height: 36, width: 36}}></Image>
                                <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Scan QR Code</Text>
                                </View>
                            </TouchableOpacity>
                        </View> */}
        {/* {ScanResult &&
                        <Fragment>
                            <Text style={styles.textTitle1}>Result</Text>
                            <View style={ScanResult ? styles.scanCardView : styles.cardView}>
                                <Text>Type : {result.type}</Text>
                                <Text>Result : {result.data}</Text>
                                <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                                <TouchableOpacity onPress={this.scanAgain} style={styles.buttonScan}>
                                    <View style={styles.buttonWrapper}>
                                        <Image source={require('./assets/camera.png')} style={{height: 36, width: 36}}></Image>
                                        <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Click to scan again</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Fragment>
                    } */}
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
          // isAuthorized = {(e)=>console.log(e)}
          checkAndroid6Permissions={e => console.log(e)}
          cameraStyle={{width: '100%', height: '100%', opacity: 1}}
          cameraContainerStyle={{
            //  :'rgba(255,255,255,0.5)'
            shadowRadius: 20,
            shadowOffset: {height: 20, width: 20},
          }}
          customMarker={
            <View style={{marginBottom: 60,
                shadowRadius: 100,
                shadowColor:"#fff",
                shadowOffset: {height: 20, width: 20},
            }}>
              <Text
                style={{
                  color: '#CCFF00',
                  fontSize: 30,
                  fontWeight: 900,
                  textAlign: 'center',
                  marginBottom: 40,
                  opacity: 1,
                }}>
                scan QR code
              </Text>
              <View style={[{height: 250, width: 250}]}>
                <View style={{position: 'absolute', left: -4, top: -4}}>
                  <Svgs title={'vector_2'} />
                </View>
                <View style={{position: 'absolute', right: -4, top: -4}}>
                  <Svgs title={'vector_1'} />
                </View>
                <View style={{position: 'absolute', left: -4, bottom: -4}}>
                  <Svgs title={'vector_3'} />
                </View>
                <View style={{position: 'absolute', right: -4, bottom: -4}}>
                  <Svgs title={'vector_4'} />
                </View>
              </View>
            </View>
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
                  onPress={() => navigation.navigate('Main')}
                  style={{
                    backgroundColor: '#313131',
                    width: 200,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                  }}>
                  <Text
                    style={{color: '#FFFFFF', fontWeight: 600, fontSize: 15}}>
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
