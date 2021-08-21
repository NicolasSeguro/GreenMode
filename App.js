import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper'
import React from 'react';
import auth from './src/screens/auth';
import mainNavigation from './src/navigation/mainNavigation';

export default function App() {
  return (
    <PaperProvider>
    <mainNavigation></mainNavigation>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({

});
