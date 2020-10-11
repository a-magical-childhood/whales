import React, {useCallback} from 'react';
import { Button, Linking, Alert, View, StyleSheet} from 'react-native'




const reportURL = 'http://hotline.whalemuseum.org/sightings/new';

const donateURL = 'https://whalemuseum.org/products/make-a-donation';

const OpenURLButton = ({ url, children }) => {

  const handlePress = useCallback(async () => {
    const canOpen = await Linking.canOpenURL(url)
  
    if(canOpen) {
      await Linking.openURL(url)
    } else {
      Alert.alert('Shootskies! We are having a bit of a problem opening the link to ${url}. Sorry about that. We will get the narwhal working on it shortly.')
    }
  }) 
  
  return <Button className="footerButton" title={children} onPress={handlePress} />;
};

  export default function Footer () {
 
  return (
    < View className='footer' style={StyleSheet.container}>
      <OpenURLButton url={reportURL}>Report A Sighting</OpenURLButton>
      <OpenURLButton url={donateURL}>Donate to Whale Museum</OpenURLButton>
    </ View>
  )

  

}