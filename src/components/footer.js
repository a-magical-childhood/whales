import React, {useCallback} from 'react';
import { Button, Linking, Alert, View, StyleSheet, Text} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';




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
  
  return <Button className="footerButton" title={children} onPress={handlePress} />

};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height: 10,
      justifyContent: 'space-evenly',
  },
  buttonContainer: {
      backgroundColor: 'rgba(34, 34, 34, 0.8)',
      zIndex: 2,
      color: 'rgb(211,211,211)',
      width: 150
  },
  button: {
    color: 'rgb(211,211,211)',
  }
});

  export default function Footer () {
 
  return (
    < View className='footer' style={styles.container}>
      <View style={styles.buttonContainer}>
        <OpenURLButton url={reportURL} style={styles.button, {color: 'rgb(211,211,211)'}}>
        Report A Sighting
        </OpenURLButton>
      </View>
      <View style={styles.buttonContainer}>
        <OpenURLButton url={donateURL}>
        Donate to Whale Museum
        </OpenURLButton>
      </View>
      
    </ View>
  )

}