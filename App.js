import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { isLoaded, useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';
import MainNavigation from './src/navigation/MainNavigation';
import { Provider as PaperProvider } from 'react-native-paper'
import React from 'react';
import auth from './src/screens/Auth';

export default function App() {

  consta [loaded, error] = useFonts({
    'nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
   if (!loaded) return <AppLoading/>
  return (
    <PaperProvider>
      <MainNavigation></MainNavigation>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({

});
