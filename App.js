import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {
  notificationListener,
  requestUserPermission,
} from './src/utils/RNFirebaseCloudMessaging.helper';
import Main from './src/components/Main';
import {notifeeEventListner} from './src/utils/notifee.helper';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
    notifeeEventListner();
  }, []);

  return <Main />;
};

export default App;
