import {Component} from 'react';
import {StyleProp, TouchableHighlightProps, ViewStyle} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import {IconType} from '../../assets/icons';

export interface IconComponentProps extends TouchableHighlightProps {
  type: IconType;
  name: string;
  size?: number;
  color?: string;
  iconProps?: Omit<IconProps, 'name' | 'size' | 'color'>;
  disabledStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<Omit<ViewStyle, 'backgroundColor'>>;
  backgroundColor?: string;
  ButtonComponent?: typeof Component;
}
