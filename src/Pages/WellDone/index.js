import {SuccessScreen} from '../../Components/SuccessScreen';
import {View, Text, StatusBar} from 'react-native';
import {Gstyles} from '../../Gstyle';

export const WellDone = () => {
  return (
    <View style={Gstyles.wrapper}>
      <SuccessScreen title={'well_done'} button_title="View my wallet">
        <Text style={[Gstyles.text,{paddingHorizontal:25}]}>
          You are all set. Now you have a wallet that only you control —
          directly, without middlemen or bankers.{' '}
        </Text>
      </SuccessScreen>
    </View>
  );
};
