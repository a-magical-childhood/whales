import React from 'react'
import {Text, View} from 'react-native';

export default function ModalGoods (props) {
  const {quantity, description, species} = props.whale;

  const styles = {
    container: {
      display: "flex"
    },
    title: {
      margin: 10,
      alignSelf: "center",
      fontWeight: "bold",
      fontSize: 20,
    },
    body: {
      margin: 5,
      alignSelf: "center",
      fontSize: 16
    }
  }

  return (
    <View>

      <Text style={styles.title}>
      {quantity || 'some'} {species} sighted here!
      </Text>

      <Text style={styles.body}>
        {description || 'Whalep, we have a bit of a problem... there was no description provided. May we all pay more attention to detail in the future.'}
      </Text>

    </View>
    )

}




