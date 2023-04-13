import React, { useCallback, useMemo, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import {BottomSheetModal,BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import { ConnectModal } from './connect';
import { HandleComponent } from './handleComponent';
import { SendTo } from '../SendTo';
import { SendToBottomSheetModal } from './sendTo';

export const Connetct = ({ref1,onPress}) => {
    const snapPoints = useMemo(() => ['73%']);
      const renderBackdrop = useCallback(
        (props) => (
          <BottomSheetBackdrop
            {...props}
            animatedIndex={{
              value: 1,
            }}
            opacity={0.85}
          />
        ), [])
    return <View>
        <BottomSheetModal
            ref={ref1}
            index={0}
            snapPoints={snapPoints}
            handleStyle ={{backgroundColor: '#161616',borderColor:'#161616',borderWidth:0 }}
            backdropComponent={renderBackdrop}
            handleComponent = {()=>{
              return <HandleComponent onPress={onPress} />
            }}
          >
           <ConnectModal />
            {/* <SendToBottomSheetModal /> */}
        </BottomSheetModal>
    </View>
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#161616',
    },
  });