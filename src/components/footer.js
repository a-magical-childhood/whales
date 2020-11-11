import React, {useCallback} from 'react';
import { Footer, FooterTab, Button } from 'native-base';
import { View, Linking, Alert, StyleSheet, Text, PickerIOSComponent} from 'react-native'
// import { preventAutoHide } from 'expo-splash-screen';





const reportURL = 'http://hotline.whalemuseum.org/sightings/new';

const donateURL = 'https://whalemuseum.org/products/make-a-donation';


const OpenURLButton = ({ url, children }) => {
  console.log('dear god please be here');
  console.log('CHILDREN', children)
  const handlePress = useCallback(async () => {
    const canOpen = await Linking.canOpenURL(url)
  
    if(canOpen) {
      await Linking.openURL(url)
    } else {
      Alert.alert('Shootskies! We are having a bit of a problem opening the link to ${url}. Sorry about that. We will get the narwhal working on it shortly.')
    }
  }) 
  
  return <Button className="footerButton" title={children} onPress={handlePress} style={{width: '100%', backgroundColor: 'rgba(34, 34, 34, 0.8)', }}>
    <Text style={{color: 'rgb(211,211,211)', textAlign: 'center'}}>{children}</Text>
  </Button> 

};

// export default function TheFooter () {
//   return(
//     <Footer className='footer' styles={styles.container}>
//       <FooterTab>
//         <OpenURLButton url={reportURL} >
//         Report A Sighting
//         </OpenURLButton>
//         <OpenURLButton url={donateURL}>
//          Donate to Whale Museum
//          </OpenURLButton>
//       </FooterTab>
//     </Footer>
//   )
// }






const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height: 10,
      justifyContent: 'space-evenly',
      bottom: 0,
      width: '100%',
      alignSelf: 'flex-end',
      borderColor: 'red', 
      borderWidth: 3,
  },
  buttonContainer: {
      // backgroundColor: 'rgba(34, 34, 34, 0.8)',
      // zIndex: 2,
      // color: 'rgb(211,211,211)', 
      width: '50%' 
  },
});

  export default function TheFooter () {
 
  return (
    < View className='footer' style={styles.container}>
     
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