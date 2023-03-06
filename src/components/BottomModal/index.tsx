import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
  useBottomSheetTimingConfigs,
} from '@gorhom/bottom-sheet';
import {BottomSheetBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {Keyboard} from 'react-native';
import {Easing} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface BottomMenuPayload {
  snapPointsList?: string[];
  bottomSheetModalProps?: Partial<BottomSheetModalProps>;
}

export interface BottomMenuType extends BottomMenuPayload {
  isVisible?: boolean;
  chidren?: JSX.Element | JSX.Element[];
}
const BottomMenu: React.FC<BottomMenuType> = props => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const {
    snapPointsList = [],
    bottomSheetModalProps,
    isVisible = false,
    chidren,
  } = props;
  const {top: safeTopArea} = useSafeAreaInsets();

  useEffect(() => {
    if (isVisible) {
      Keyboard.dismiss();
      bottomSheetRef.current!.present();
    } else {
      bottomSheetRef.current!.close();
    }
  }, [isVisible]);

  const snapPoints = useMemo(() => {
    if (snapPointsList && snapPointsList?.length > 0) {
      return snapPointsList;
    }
    return ['60%', '80%'];
  }, [snapPointsList]);

  const _renderBackdrop = useCallback(
    (backdropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        opacity={0.2}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        {...backdropProps}
      />
    ),
    [],
  );

  const easingConfig = useMemo(() => Easing.out(Easing.quad), []);
  const DURATION = 250;
  const animationConfigs = useBottomSheetTimingConfigs({
    duration: DURATION,
    easing: easingConfig,
  });

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      topInset={safeTopArea}
      animationConfigs={animationConfigs}
      backdropComponent={_renderBackdrop}
      {...bottomSheetModalProps}>
      {chidren}
    </BottomSheetModal>
  );
};

export default BottomMenu;
