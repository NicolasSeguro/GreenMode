import * as Font from 'expo-font'

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import MainNavigation from './src/navigation/MainNavigation';
import { Provider as PaperProvider } from 'react-native-paper'
// import { Provider } from 'react-redux';
import React from 'react';
import auth from './src/screens/Auth';
// import store from './store'
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
    NunitoBold: require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!loaded) return <AppLoading />

  return (
    <PaperProvider>
      <MainNavigation></MainNavigation>
    </PaperProvider>
    // <Provider store={store}>
      
    // </Provider>
  );
}

const styles = StyleSheet.create({

});
