import React, {useEffect} from 'react';
import {
  notificationListener,
  requestUserPermission,
} from './src/utils/RNFirebaseCloudMessaging.helper';
import {notifeeEventListner} from './src/utils/notifee.helper';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './src/components/Main';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

const Settings = () => <Text>Settings components</Text>;

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
    notifeeEventListner();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
