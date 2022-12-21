import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {
  notificationListener,
  requestUserPermission,
} from './src/utils/RNFirebaseCloudMessaging.helper';
import Main from './src/components/Main';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  return <Main />;
};

export default App;
