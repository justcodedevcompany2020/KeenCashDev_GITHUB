import React, {forwardRef, useCallback, useMemo, useRef} from 'react';
import {View} from 'react-native';
import {BottomSheetModal, BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {ConnectModal} from './connect';
import {HandleComponent} from './handleComponent';
import {SendToBottomSheetModal} from './sendTo';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const Connetct = ({ref1, onPress}) => {
  const snapPoints = useMemo(() => ['63%']);
  const renderBackdrop = useCallback(
    props => (
        <BottomSheetBackdrop
          {...props}
          animatedIndex={{
            value: 1,
          }}
          opacity={0.85}
        />
    ),
    [],
  );
  return (
    <View>
      <BottomSheetModal
        ref={ref1}
        index={0}
        snapPoints={snapPoints}
        handleStyle={{
          backgroundColor: '#161616',
          borderColor: '#161616',
          borderWidth: 0,
        }}
        backdropComponent={renderBackdrop}
        handleComponent={() => {
          return <HandleComponent onPress={onPress} />;
        }}>
        {/* <ConnectModal /> */}
        <SendToBottomSheetModal />
      </BottomSheetModal>
    </View>
  );
};
