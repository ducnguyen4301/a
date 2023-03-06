/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {COLORS, normalize} from '../../utils/reponsive';
import Icon from '../Icon';

interface CheckType {
  status: boolean;
  resize?: number;
  onPress?: () => void;
  disable?: boolean;
}

const CheckBox: FC<CheckType> = props => {
  const {status = false, onPress, resize = 1, disable = false} = props;
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={[
        styles.containtStyle,
        {
          backgroundColor: status ? '#1890ff' : '#fff',
          width: normalize(26) * resize,
          height: normalize(26) * resize,
        },
      ]}>
      <Icon
        name="check"
        type="materialIcons"
        size={normalize(20) * resize}
        color={COLORS.white}
      />
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  containtStyle: {
    width: normalize(26),
    height: normalize(26),
    borderRadius: normalize(5),
    borderWidth: normalize(1.5),
    borderColor: COLORS.blu26225b,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
