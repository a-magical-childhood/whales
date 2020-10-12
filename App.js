import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/header.js';
import DeMap from './map.js'
import Footer from './src/components/footer.js'

// const reportURL = 'http://hotline.whalemuseum.org/sightings/new';

// const donateURL = 'https://whalemuseum.org/products/make-a-donation';


export default function App() {
 
  return (

    <View style={styles.container}>
      <Header />
      <DeMap />
      <StatusBar style="auto" />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
