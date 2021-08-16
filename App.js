import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Green Mode</Text>
      <StatusBar style="auto" /> 
      <View style={styles.view}>
        <TextInput 
          placeholder="Item de la lista"
          style={styles.input} />
        <Button title="Ir al shop"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1,
    marginRight: 20
  }
  
});
