import React, { useContext, useEffect, useState } from 'react';
import { Button, Overlay, Text, View } from 'react-native-elements';
import { Marker } from 'react-native-maps'

import Context from './context.js';
import Tail from '../tail.png'

const WhaleList = () => {
  const WhaleContext = useContext(Context);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    WhaleContext.getDeWhales();
  }, []);

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  // console.log('Making ths fucker work', WhaleContext.whales[5].latitude )
  return (
    <>
      {(WhaleContext.whales && WhaleContext.whales.length) ? WhaleContext.whales.map((whale, idx)=> (       
          <Marker
            key={whale.id}
            coordinate={{latitude: whale.latitude, longitude: whale.longitude}}
            image={Tail}
            onPress={toggleOverlay}
          >
            <Overlay key={whale.latitude} isVisible={visible} onPress={toggleOverlay}>
            <Text>Hello from Overlay!</Text>
          </Overlay>
          </Marker>

        ))
      : null}
      
    </>
  )
}

export default WhaleList;