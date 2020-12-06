import React, { useContext, useEffect, useState} from 'react';
import {Image} from 'react-native';
import { Overlay } from 'react-native-elements';
import { Marker } from 'react-native-maps'

import Context from './context.js';
import Tail from '../tail.png'
import Figure from '../youAreHere.gif';
import ModalText from '../src/components/modalText.js';

const WhaleList = () => {
  const WhaleContext = useContext(Context);
  const [visible, setVisible] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
    error: null
  });

  let StickFigure = Figure;

  useEffect(() => {
    WhaleContext.getDeWhales();
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
  }, []);

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  
  return (
    <>
      <Marker coordinate={currentLocation}>
        <Image source={StickFigure} 
        style={{width: 45, height: 75}}></Image>
      </Marker>
      {(WhaleContext.whales && WhaleContext.whales.length) ? WhaleContext.whales.map((whale, idx)=> (       
          <Marker
            key={whale.id}
            coordinate={{latitude: whale.latitude, longitude: whale.longitude}}
          
          >
            <Image source={Tail}   
              onPress={toggleOverlay}
              style={{width: 25, height: 45}}>
            </Image>
            <Overlay key={whale.latitude} isVisible={visible} onPress={toggleOverlay} style={{padding: 10, textAlign: 'center' }}>
               <ModalText whale={whale}/>
            </Overlay>
          </Marker>

        ))
      : null}
      
    </>
  )
}

export default WhaleList;