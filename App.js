import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import MainNavigation from './src/navigation/MainNavigation';
import { Provider as PaperProvider } from 'react-native-paper'
import React from 'react';
import auth from './src/screens/Auth';

export default function App() {
  return (
    <PaperProvider>
      <MainNavigation></MainNavigation>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({

});
