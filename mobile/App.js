
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_900Black } from '@expo-google-fonts/roboto';

import Routes from './src/router';




export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_900Black,

  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>

      <StatusBar style="light" backgroundColor="#000" translucent={true} />

      <Routes />

    </>
  );
}


