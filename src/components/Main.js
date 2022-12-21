import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main</Text>
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
  text: {
    fontSize: 64,
  },
});
