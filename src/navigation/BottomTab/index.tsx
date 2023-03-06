import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from '../../components/Icon';
import COLORS from '../../theme/colors';
import {bottomTabScreens} from '../route';
import {BottomTabRoutes, ScreenOptions} from '../types';

const Tab = createBottomTabNavigator<BottomTabRoutes>();

const BottomTabNavigation = () => {
  const screenOptions: ScreenOptions<
    BottomTabRoutes,
    BottomTabNavigationOptions
  > = {
    Home: {
      tabBarLabel: 'Home',
      tabBarIcon: ({focused}) => (
        <Icon
          type={'ionicons'}
          name={focused ? 'ios-bar-chart' : 'ios-bar-chart-outline'}
          size={18}
        />
      ),
    },
    Sale: {
      tabBarLabel: 'Sale',
      tabBarIcon: ({focused}) => (
        <Icon
          type={'materialIcons'}
          size={18}
          name={focused ? 'receipt' : 'receipt-o'}
        />
      ),
    },
    Account: {
      tabBarLabel: 'Account',
      tabBarIcon: ({focused}) => (
        <Icon
          size={18}
          type={'fontAwesome'}
          name={focused ? 'user' : 'user-o'}
        />
      ),
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarAllowFontScaling: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.blu26225b,
        tabBarInactiveTintColor: COLORS.black,
        tabBarStyle: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.44,
          shadowRadius: 10.32,

          elevation: 16,
        },
        tabBarLabelStyle: {fontSize: 14},
      }}>
      {bottomTabScreens.map(({name, component}: any) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={screenOptions[name]}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
