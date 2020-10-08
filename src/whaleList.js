import React, { useContext, useEffect } from 'react';
import Context from './context.js';
import {Marker} from 'react-native-maps'
import Tail from '../tail.png'

const WhaleList = () => {
  
  const WhaleContext = useContext(Context);

  useEffect(() => {
    WhaleContext.getDeWhales();
  }, []);

  // console.log('Making ths fucker work', WhaleContext.whales[5].latitude )
  return (
    <>
          {(WhaleContext.whales &&WhaleContext.whales.length) ? WhaleContext.whales.map((whale)=> (
          <Marker
          key={whale.id}
          coordinate={{latitude: whale.latitude, longitude: whale.longitude}}
          image={Tail}
          >
          </Marker>
        ))
      : null}
      
    </>
  )
}

export default WhaleList;