import {SuccessScreen} from '../../Components/SuccessScreen';
import {View, Text, StatusBar} from 'react-native';
import {Gstyles} from '../../Gstyle';

export const WellDone = ({navigation}) => {
  return (
    <View style={Gstyles.wrapper}>
      <SuccessScreen onPress={()=>navigation.navigate('NavigationMenu')} title={'well_done'} button_title="View my wallet">
        <Text style={[Gstyles.text,{paddingHorizontal:25}]}>
          You are all set. Now you have a wallet that only you control —
          directly, without middlemen or bankers.{' '}
        </Text>
      </SuccessScreen>
    </View>
  );
};
