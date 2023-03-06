import {PressableProps, StyleProp, ViewStyle} from 'react-native';
import {GutterProps} from '../../utils/util';
import {IconComponentProps} from '../Icon/type';

export type CommonButtonProps = Omit<
  any,
  'style' | 'hitSlop' | 'children' | 'inset'
>;

export interface ButtonProps extends PressableProps, CommonButtonProps {
  title?: string;

  style?: StyleProp<Omit<ViewStyle, 'backgroundColor'>>;

  pressedBackground?: string;

  disabledBackground?: string;

  padding?: number | GutterProps;

  leftIcon?: IconComponentProps | React.ReactNode;

  leftIconContainerStyle?: StyleProp<ViewStyle>;

  rightIcon?: IconComponentProps | React.ReactNode;

  rightIconContainerStyle?: StyleProp<ViewStyle>;

  loading?: boolean;

  type?: 'primary' | 'outline' | 'text' | 'orange';

  titleProps?: TitleProps;
}

export type TitleProps = {
  fontType?: keyof any;
  color?: string;
  center?: boolean;
  right?: boolean;
  justify?: boolean;
  size?: number;
  lineHeight?: number;
  backgroundColor?: string;
  children?: any;
};
