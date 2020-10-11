import React, {useCallback} from 'react';
import { Button, Linking, Alert} from 'react-native'

export default function ButtonLinks (url){

  const reportURL = 'http://hotline.whalemuseum.org/sightings/new';

  const donateURL = 'https://whalemuseum.org/products/make-a-donation';

  const handlePress = useCallback(async () => {
    const canOpen = await Linking.canOpenURL(url)
  
    if(canOpen) {
      await Linking.openURL(url)
    } else {
      Alert.alert('Shootskies! We are having a bit of a problem opening the link to ${url}. Sorry about that. We will get the narwhal working on it shortly.')
    }
    
  }) 

  return (
    <Button title="Report A Sighting" url={reportURL} onPress={handlePress} />,
    <Button title="Make A Donation" url={donateURL} onPress={handlePress} />
  )

}
