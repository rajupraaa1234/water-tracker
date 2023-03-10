import React, {useContext, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import SplashScreen from 'react-native-splash-screen'
import { StyleSheet, Text, View } from 'react-native';
// import {AppNavigator} from '@navigation';
import AppNavigator from './src/app/navigation/AppNavigator';

export default function App() {
  {SplashScreen.hide()}
  return (
    <AppNavigator/>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
