import * as Font from 'expo-font'

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useMemo, useState } from 'react';

import AppLoading from 'expo-app-loading';
import AuthContext from './src/context/AuthContext';
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
  });

  // const [auth, setAuth] = useState(undefined);

  // useEffect(() => {
  //   setAuth(null);
  // },[]);
  
  // const authData = useMemo(
  //   () => ({
  //     auth: undefined,
  //     login: () => null,
  //     logout: () => null,

  //   }),
  //   [auth]
  // );

  // if(auth === undefined) return null;


  return (
    // <AuthContext.Provider value={authData}>
    <PaperProvider>
      <MainNavigation/>
    </PaperProvider>
    // </AuthContext.Provider>
    // <Provider store={store}>
      
    // </Provider>
  );
}
