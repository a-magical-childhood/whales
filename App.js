import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DeMap from './map.js'


export default function App() {
 
  return (
      <View style={styles.container}>
        <Text>HELLO MERMAIDS!</Text>
        <DeMap />
        <StatusBar style="auto" />
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
});
