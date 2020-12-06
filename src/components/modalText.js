import React from 'react'
import {Text} from 'react-native';

export default function ModalGoods (props) {
 const {quantity, description, species} = props.whale;

 return(
   <>
    <Text>
      WHALES AND WHALES AND MORE WHALES
    </Text>
    <Text style={{margin: 2}}>
      Species: {quantity || 'some'}{species}
    </Text>
    <Text>
      Description: {description || 'Whalep, we have a bit of a problem... there was no description provided. May we all pay more attention to detail in the future.'}
    </Text>
  </>
 )

}




