import {NavigatorScreenParams} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import React from 'react';
import {Login} from '../screens/Auth';
import BottomTab from './BottomTab';
import {ROUTE_KEY} from './route';
import {BottomTabRoutes} from './types';

export type RootStackScreensParams = {
  Splash: {delay?: number; text?: string};
  BottomTab: undefined | NavigatorScreenParams<BottomTabRoutes>;
  Login: undefined;
  Home: undefined;
  Sale: undefined;
  Account: undefined;
};

export type RootStackScreens = keyof RootStackScreensParams;

export type RootStackScreenProps<T extends RootStackScreens> =
  NativeStackScreenProps<RootStackScreensParams, T>;

export type UseRootStackNavigation<T extends RootStackScreens = 'Splash'> =
  NativeStackNavigationProp<RootStackScreensParams, T>;

const {Navigator, Screen} =
  createNativeStackNavigator<RootStackScreensParams>();

const RootStack = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Login">
    <Screen
      name={ROUTE_KEY.BottomTab}
      component={BottomTab}
      options={{gestureEnabled: false}}
    />
    <Screen
      name={ROUTE_KEY.Login}
      component={Login}
      options={{gestureEnabled: false}}
    />
  </Navigator>
);

export default RootStack;
