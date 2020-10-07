import React, { useContext, useEffect } from 'react';
import { Context } from './context.js';
import {Marker} from 'react-native-maps'
import Tail from '../tail.png'

const WhaleList = () => {

  console.log('inside WHALELIST in whaleList.js')

  const WhaleContext = useContext(Context);

  console.log('WhaleContext', WhaleContext);


  useEffect(() => {
    console.log('WhaleContext.getDeWhales', WhaleContext.getDeWhales);
    WhaleContext.getDeWhales();
  }, []);

  return (
    <>
        {Context.whales.length ? Context.whales.map((whale)=> {
          <Marker
          key={whale.id}
          coordinate={{lat: whale.latitude, lng: whale.longitude}}
          image={Tail}
          >

          </Marker>
        })
      : null}
    </>
  )
}

export default WhaleList;