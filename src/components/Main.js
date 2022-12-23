import {StyleSheet, Text, Pressable, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  onDisplayNotification,
  onCreateTriggerNotification,
} from '../utils/notifee.helper';

const Main = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => [
          styles.btn,
          {
            backgroundColor: pressed ? 'teal' : '#000',
            borderWidth: pressed ? 0 : 2,
          },
        ]}
        onPress={() => {
          // onCreateTriggerNotification(
          //   'titile condent',
          //   'Body condent',
          //   '21-11-2022 10:03 pm',
          // )
          onDisplayNotification('12390', 'ifjijfojow', 'wewefwfwefwef');
          navigation.navigate('Settings');
        }}>
        <Text style={styles.text}>PUSH</Text>
      </Pressable>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  btn: {
    elevation: 2,
    padding: 20,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 2,
  },
  text: {
    fontSize: 64,
    color: '#fff',
  },
});
