import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import COLORS from '../../theme/colors';
import {normalize} from '../../utils/reponsive';

interface ButtonProps {
  title: string;
  icon?: ImageSourcePropType;
  primary?: boolean;
  outlined?: boolean;
  disabled?: boolean;
  iconStyle?: StyleProp<ImageStyle>;
  buttonStyles?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

const Button = (props: ButtonProps) => {
  const {
    title,
    icon,
    primary,
    outlined = false,
    disabled = false,
    iconStyle,
    buttonStyles,
    containerStyle,
    textStyle,
    onPress,
  } = props;

  const mainButton = !outlined ? (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        primary ? styles.buttonPrimary : styles.buttonSecondary,
        buttonStyles,
        disabled && primary && {backgroundColor: COLORS.primary},
      ]}>
      {icon && (
        <Image
          source={icon}
          style={[styles.icon, iconStyle]}
          resizeMode="contain"
        />
      )}
      <Text
        style={[
          primary ? styles.titlePrimary : {color: COLORS.black},
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, styles.buttonOutlined, buttonStyles]}>
      {icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
      <Text style={[styles.titleSecondary, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );

  return <View style={containerStyle}>{mainButton}</View>;
};

const styles = StyleSheet.create({
  button: {
    borderRadius: normalize(4),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(12),
    paddingVertical: normalize(14),
  },
  icon: {
    width: normalize(18),
    height: normalize(18),
  },
  buttonPrimary: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
  },
  buttonSecondary: {
    backgroundColor: COLORS.primary,
  },
  buttonOutlined: {
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  titlePrimary: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
  },
  titleSecondary: {
    color: COLORS.primary,
  },
});

export default Button;
