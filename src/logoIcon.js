import React, {useCallback} from 'react';
import { StyleSheet, Image, TouchableOpacity, Linking, Alert } from 'react-native';

import Logo from '../logo.png'




const WhaleLogo = () => {
    const styles = StyleSheet.create({
        tinyLogo: {
          width: 45,
          height: 45,
        },
      });

    const handlePress = (async () => {

      const canOpen = await Linking.canOpenURL('https://whalemuseum.org/')
  
      if(canOpen) {
        await Linking.openURL('https://whalemuseum.org/')
      } else {
        Alert.alert('Shootskies! We are having a bit of a problem opening the link to ${url}. Sorry about that. We will get the narwhal working on it shortly.')
      }
    }) 
  


    return (
      <TouchableOpacity onPress={handlePress}>
        <Image 
            style={styles.tinyLogo}
            source={Logo}
        /> 
      </TouchableOpacity>
    )
}

export default WhaleLogo;