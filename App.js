import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';

import { store, persistor } from './src/redux/store';
import Router from './src/router/Router';
import { colors } from './src/constants/colors';
import { configureGoogle } from './src/services/googleConfig';

const LoadingComponent = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
    <ActivityIndicator size="large" color={colors.primary} />
  </View>
);

export default function App() {
  useEffect(() => {
    try {
      configureGoogle()
    } catch (err) {
      // keep app resilient if Google config fails in dev
      console.warn('Google configure failed', err)
    }
  }, [])
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingComponent />} persistor={persistor}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}