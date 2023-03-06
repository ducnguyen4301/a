import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  NavigationContainer,
  NavigationContainerRef,
  NavigationState,
} from '@react-navigation/native';
import React, {
  createRef,
  RefObject,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import {AppState, AppStateStatus, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootStackNavigation from './RootStackNavigation';

function screenTracking(state: NavigationState | undefined): void {
  if (state) {
    const route = state?.routes[state.index];
    if (route.state) {
      return screenTracking(route?.state as any);
    }
    return console.log(`====== NAVIGATING to > ${route?.name}`);
  }
}

const MainNavigation = () => {
  const isReadyRef: RefObject<any> = createRef();
  const navigationRef = React.createRef<NavigationContainerRef<any>>();
  const appState = useRef<string>('');

  const handleAppStateChange = useCallback((nextAppState: AppStateStatus) => {
    if (
      (!!appState.current.match(/active|foreground/) &&
        nextAppState === 'inactive') ||
      (!appState.current && nextAppState === 'inactive')
    ) {
    }
    if (
      !!appState.current.match(/inactive|background/) &&
      nextAppState.match(/active|foreground/)
    ) {
    }
    console.log('======= AppState to >', nextAppState.toUpperCase());
    appState.current = nextAppState;
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => {
      subscription.remove();
    };
  }, [handleAppStateChange]);

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={screenTracking}
      onReady={() => {
        // @ts-ignore
        isReadyRef.current = true;
      }}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <StatusBar barStyle="dark-content" />
          <RootStackNavigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default MainNavigation;
