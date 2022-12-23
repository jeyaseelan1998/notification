import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {
  onDisplayNotification,
  onCreateTriggerNotification,
} from '../utils/notifee.helper';

const Main = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          // onCreateTriggerNotification(
          //   'titile condent',
          //   'Body condent',
          //   '21-11-2022 10:03 pm',
          // )
          onDisplayNotification('12390', 'ifjijfojow', 'wewefwfwefwef')
        }>
        <Text style={styles.text}>PUSH</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    elevation: 2,
    padding: 20,
    borderRadius: 100,
    backgroundColor: 'grey',
  },
  text: {
    fontSize: 64,
  },
});
