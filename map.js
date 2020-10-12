import React, {  useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {View, StyleSheet, Dimensions} from 'react-native';

import Whales from './src/whaleList.js'
import WrapYoState from './src/whaleState.js'



export default function DoMap(){
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
    error: null,
    zoomEnabled: true
  })
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      // (error) => this.setState({ error: error.messsage }),
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 2000 }
    );
  })
       {/* <Marker coordinate={currentLocation} /> */}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

  return(
    
    <WrapYoState>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.014,
            longitudeDelta: 0.012,
          }}
        >
          <Whales /> 
        </MapView>
      </View>
    </WrapYoState>    

  )
}




