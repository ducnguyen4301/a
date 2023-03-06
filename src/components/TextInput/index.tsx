/* eslint-disable react-native/no-inline-styles */
import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputFocusEventData,
  TouchableWithoutFeedback,
  ViewStyle,
  TextInput as TextInputRN,
  Text,
  View,
} from 'react-native';
import COLORS from '../../theme/colors';
import {normalize} from '../../utils/reponsive';
import {isIcon, isString} from '../../utils/util';
import Icon from '../Icon';
import {InputProps} from './types';
const MIN_HEIGHT_INPUT = 52;

const TextInput = forwardRef<any, InputProps>((props, ref) => {
  const inputRef = useRef<any>(null);

  const {
    label,
    labelStyle,
    required,
    containerStyle,
    error,
    errorStyle,
    showError,
    inputContainerStyle,
    style,
    size = 15,
    disabled,
    disabledInputStyle,
    leftIcon,
    leftIconContainerStyle,
    onLeftIconPress,
    rightIcon,
    rightIconContainerStyle,
    onRightIconPress,
    secureTextEntry,
    onFocus,
    onBlur,
    hideFocus,
    numberOfLines,
    maxLength,
    value = '',
    children,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (ref && typeof ref !== 'function') {
      (ref as any).current = inputRef.current;
    }
  }, [ref]);

  const _renderLabel = () => {
    if (isString(label)) {
      return (
        <Text
          style={[
            labelStyle,
            {marginBottom: normalize(4), color: COLORS.blu26225b, fontSize: 16},
          ]}>
          {label}
          {required && <Text style={{color: 'red'}}> *</Text>}
        </Text>
      );
    }
    return label;
  };

  const _renderError = () => {
    if (isString(error)) {
      return <Text style={errorStyle}>{error}</Text>;
    }
    return error;
  };

  const inputInitStyle = StyleSheet.flatten([
    {
      color: COLORS.grayBDBDBD,
      minHeight: MIN_HEIGHT_INPUT,
      flex: 1,
      fontSize: size,
      borderRadius: 8,
      paddingLeft: leftIcon ? 0 : 16,
      paddingRight: rightIcon || props.secureTextEntry ? 0 : 16,
    },
    disabled && {backgroundColor: COLORS.grayBDBDBD, color: COLORS.grayBDBDBD},
    disabled && disabledInputStyle,
    !!numberOfLines && {
      height: size * 1.6 * numberOfLines,
    },
    style,
  ]);

  const [secureEye, setSecureEye] = useState(true);

  const _renderIcon = (isRight?: boolean) => {
    const defaultIconStyle = {
      minHeight: MIN_HEIGHT_INPUT,
      paddingHorizontal: normalize(8),
      opacity: disabled ? 0.5 : 1,
      justifyContent: 'center' as ViewStyle['justifyContent'],
    };

    if (secureTextEntry && isRight && !rightIcon) {
      return (
        <View style={styles.hidePassStyle}>
          <Icon
            style={defaultIconStyle}
            size={20}
            color={COLORS.grayBDBDBD || COLORS.grayBDBDBD}
            name={secureEye ? 'eye' : 'eye-off'}
            type="ionicons"
            onPress={() => setSecureEye(prev => !prev)}
          />
        </View>
      );
    }

    const [icon, iconStyle, onPressIcon] = isRight
      ? [rightIcon, rightIconContainerStyle, onRightIconPress]
      : [leftIcon, leftIconContainerStyle, onLeftIconPress];

    if (isIcon(icon)) {
      return (
        <Icon
          onPress={onPressIcon}
          style={StyleSheet.flatten([defaultIconStyle, iconStyle])}
          name={icon.name}
          size={icon.size || size}
          color={(icon.color as any) || COLORS.bgGray}
          type={icon.type}
        />
      );
    }

    return icon;
  };

  const _onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const _onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const _renderInput = () => {
    return (
      <TextInputRN
        autoCapitalize="none"
        allowFontScaling={false}
        underlineColorAndroid="transparent"
        style={inputInitStyle}
        autoCorrect={false}
        placeholderTextColor={COLORS.grayBDBDBD}
        editable={!disabled}
        {...rest}
        value={value}
        onFocus={_onFocus}
        onBlur={_onBlur}
        maxLength={maxLength}
        secureTextEntry={
          rightIcon ? props.secureTextEntry : props.secureTextEntry && secureEye
        }
        ref={e => {
          inputRef.current = e;
          typeof ref === 'function' && ref(e);
        }}
      />
    );
  };

  const _renderHint = () => {
    return (
      <Text style={{marginLeft: normalize(4), backgroundColor: 'red'}}>
        {`${value.length}/${maxLength}`}
      </Text>
    );
  };

  return (
    <View style={containerStyle}>
      {!!label && _renderLabel()}
      <TouchableWithoutFeedback
        onPress={() => {
          inputRef.current?.focus();
        }}>
        <View
          style={[
            inputContainerStyle,
            styles.inputStyle,
            {
              borderColor:
                !hideFocus && error
                  ? 'red'
                  : isFocused
                  ? COLORS.grayBDBDBD
                  : COLORS.grayBDBDBD,
            },
          ]}>
          {children}
          {leftIcon && _renderIcon()}
          {_renderInput()}
          {(rightIcon || props.secureTextEntry) && _renderIcon(true)}
        </View>
      </TouchableWithoutFeedback>
      <View
        style={[
          styles.hintStyle,
          {justifyContent: showError && error ? 'space-between' : 'flex-end'},
        ]}>
        {showError && error && _renderError()}
        {!!maxLength && _renderHint()}
      </View>
    </View>
  );
});

export default TextInput;
const styles = StyleSheet.create({
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
  },
  hintStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: normalize(4),
  },
  hidePassStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
