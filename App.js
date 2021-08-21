import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper'
import React from 'react';
import auth from './src/screens/auth';

export default function App() {
  return (
    <PaperProvider>
    <View>
      <Text>Green Mode</Text>
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({

});
