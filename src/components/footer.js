import React, {useCallback} from 'react';
import { Button } from 'native-base';
import { View, Linking, Alert, StyleSheet, Text} from 'react-native'






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
  
  return <Button className="footerButton" title={children} onPress={handlePress} style={{width: '100%', backgroundColor: 'rgba(34, 34, 34, 0.8)', display: 'flex', justifyContent: 'space-evenly' }}>
    <Text style={{color: 'rgb(211,211,211)', textAlign: 'center',fontWeight: 'bold'}}>{children}</Text>
  </Button> 

};








const styles = StyleSheet.create({
  buttonContainer: { 
      width: '49%' 
  },
});

  export default function TheFooter () {
 
  return (
    < View className='footer' style={ {height: 'auto', width: '100%', display: 'flex', flex: 1,
    flexDirection: 'row', position: 'absolute', bottom: 1, justifyContent: 'space-evenly', }}>
     
      <View style={styles.buttonContainer}>
      
        <OpenURLButton children={'Report A Sighting'} url={reportURL}> 
        </OpenURLButton>
      </View>
      <View style={styles.buttonContainer}>
      
        <OpenURLButton children={'Donate to Whale Museum'} url={donateURL}>
      
        </OpenURLButton>
      </View>
      
    </ View>
  )

}