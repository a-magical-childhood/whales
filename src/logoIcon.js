import React from 'react';
import { StyleSheet, Image } from 'react-native';

import Logo from '../logo.png'

const WhaleLogo = () => {
    const styles = StyleSheet.create({
        tinyLogo: {
          width: 45,
          height: 45,
        },
      });

    return (
        <Image 
            style={styles.tinyLogo}
            source={Logo}
        /> 
    )
}

export default WhaleLogo;