import React, { Fragment,useState,useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  Linking,
  View,
  ImageBackground,
  PermissionsAndroid 
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import styles from './styles';
import {Svgs} from '../../Svg';
import {PremissionAcces} from '../PremissionAcces';
import { useDispatch, useSelector } from 'react-redux';
import {check_accaunt, SendToken, send_ton_white_qr} from '../../store/action/action'

const ScanScreen = ({navigation}) => {
  const [scan, setScan] = useState(true);
  const [scanResult, setScanResult] = useState(false);
  const [result, setResult] = useState(null);
  const [permision, setPermision] = useState(true);
  const [r,setR] = useState(false)
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.torch);
  const {check} = useSelector((st)=>st)
  const [qrCode,setQrCode] = useState('')
  const dispatch = useDispatch()
  const flash = () => {
    if (flashMode === RNCamera.Constants.FlashMode.torch) {
      setFlashMode(RNCamera.Constants.FlashMode.off);
    } else {
      setFlashMode(RNCamera.Constants.FlashMode.torch);
    }
  };
  const onSuccess = e => {
    const check = e.data;
    setQrCode(check)
    dispatch(check_accaunt(check))
  };
  activeQR = () => {
    setScan(true);
  };
  scanAgain = () => {
    setScan(true);
    setResult(true);
  };

  useEffect(()=>{
    const per = async() =>{
      let result =r
      if(!result){
        const interval = setInterval(async() => {
          result =  await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)
          setR(result)
          if(result){
            setPermision(true)
          }
          else {
            setPermision(false)
          }
        }, 1000);
        return () => clearInterval(interval);
      }
      else {
        result =  await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)
        setR(result)
        if(result){
          setPermision(true)
        }
        else {
          setPermision(false)
        }
      }
    }
    per()
},[r])
useEffect(()=>{
  if(check.status === 'checked'){
    dispatch(SendToken(qrCode))
    dispatch(send_ton_white_qr())
    // navigation.goBack('')
    navigation.navigate('NavigationMenu')
  }
},[check.status])

if(permision){
  return (
    <View style={styles.scrollViewStyle}>
      <Fragment>
        <QRCodeScanner
          flashMode={flashMode}
          reactivate={true}
          showMarker={true}
          checkAndroid6Permissions
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
  )}
  else {

    return(
      <PremissionAcces
      navigation={navigation}
      permision={e => setPermision(e)}
    />
    )
  }
};
export default ScanScreen;
