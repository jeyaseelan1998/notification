/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee, {EventType} from '@notifee/react-native';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

// Register background handler ===> notifee
notifee.onBackgroundEvent(async ({type, detail}) => {
  const {notification, pressAction} = detail;
  console.log(pressAction, 'clicked', notification);
  // await notifee.cancelNotification(notification.id);
});

AppRegistry.registerComponent(appName, () => App);
