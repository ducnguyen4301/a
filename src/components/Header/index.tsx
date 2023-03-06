import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutChangeEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

// Navigation
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Icon from '../Icon';
import {SafeAreaView} from 'react-native-safe-area-context';

type HeaderProps = {
  title?: string;
  titlePosition?: 'left' | 'center' | 'right';
  hasBackButton?: boolean;
  onGoBack?: () => void;
  enableSearch?: boolean;
  rightIcon?: JSX.Element;
  onPressRightIcon?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
};

const Header = ({
  title,
  hasBackButton,
  onGoBack,
  rightIcon,
  onPressRightIcon,
  titlePosition = 'center',
  onLayout,
  contentContainerStyle,
  headerStyle,
}: HeaderProps) => {
  const navigation = useNavigation();
  const onPressBack = () => {
    onGoBack ? onGoBack() : navigation.goBack();
  };

  return (
    <SafeAreaView
      style={[styles.container, contentContainerStyle]}
      onLayout={onLayout}>
      <View style={[styles.viewHeader, headerStyle]}>
        {titlePosition !== 'left' && (
          <View style={[styles.baseView, styles.flexStart]}>
            {hasBackButton && (
              <TouchableOpacity onPress={onPressBack}>
                <View style={styles.leftIconView}>
                  <Icon
                    type="materialCommunityIcons"
                    name="chevron-left"
                    size={20}
                  />
                </View>
              </TouchableOpacity>
            )}
          </View>
        )}
        <View
          style={[
            styles.largeView,
            titlePosition === 'left' && styles.flexStart,
            titlePosition === 'right' && styles.flexEnd,
          ]}>
          <Text
            style={[
              styles.titleLarge,
              styles.title,
              titlePosition === 'left' && [
                styles.leftIconView,
                styles.titleLeft,
              ],
              titlePosition === 'right' && [
                styles.rightIconVIew,
                styles.titleRight,
              ],
            ]}>
            {title}
          </Text>
        </View>
        {titlePosition !== 'right' && (
          <View style={[styles.baseView, styles.flexEnd]}>
            {rightIcon && (
              <TouchableOpacity
                style={styles.rightButton}
                onPress={onPressRightIcon}>
                {rightIcon}
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;
