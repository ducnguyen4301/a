import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import {getIconComponent} from '../../assets/icons';

import {IconComponentProps} from './type';

const Icon: React.FC<IconComponentProps> = props => {
  const {
    type,
    name,
    color = 'primary',
    iconProps,
    size,
    disabledStyle,
    style,
    backgroundColor,
    activeOpacity = 0.6,
    ButtonComponent = props.onPress
      ? Platform.select<typeof React.Component>({
          android: TouchableNativeFeedback,
          default: TouchableOpacity,
        })
      : TouchableOpacity,
    ...rest
  } = props;

  const IconComponent = getIconComponent(type);

  const initContainerStyle = StyleSheet.flatten([
    styles.container,
    {backgroundColor},
    props.disabled && styles.disabledStyle,
    disabledStyle && disabledStyle,
    style,
  ]);

  return (
    <ButtonComponent
      {...rest}
      {...{activeOpacity}}
      style={Platform.OS === 'android' ? {} : initContainerStyle}>
      <View style={Platform.OS === 'android' ? initContainerStyle : {}}>
        <IconComponent
          {...iconProps}
          name={name}
          size={size || 0}
          color={color}
        />
      </View>
    </ButtonComponent>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  disabledStyle: {opacity: 0.5},
});
