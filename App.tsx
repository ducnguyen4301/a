import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <MainNavigation />
    </SafeAreaProvider>
  );
};

export default App;
