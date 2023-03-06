import {
  GestureResponderEvent,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {IconComponentProps} from '../Icon/type';

export interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;

  disabled?: boolean;

  disabledInputStyle?: StyleProp<ViewStyle>;

  inputContainerStyle?: StyleProp<ViewStyle>;

  inputStyle?: StyleProp<TextStyle>;

  fontType?: 'regular' | 'bold';

  size?: number;

  label?: React.ReactNode;

  labelStyle?: StyleProp<TextStyle>;

  required?: boolean;

  error?: React.ReactNode;

  errorStyle?: StyleProp<TextStyle>;

  showError?: boolean;

  leftIcon?: IconComponentProps | React.ReactNode;

  leftIconContainerStyle?: StyleProp<ViewStyle>;

  onLeftIconPress?: (e: GestureResponderEvent) => void;

  rightIcon?: IconComponentProps | React.ReactNode;

  rightIconContainerStyle?: StyleProp<ViewStyle>;

  onRightIconPress?: (e: GestureResponderEvent) => void;

  hideFocus?: boolean;

  ref?: any;

  maxLength?: number;
  children?: any;
}
