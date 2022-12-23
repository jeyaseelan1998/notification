import notifee, {
  EventType,
  TriggerType,
  TimestampTrigger,
} from '@notifee/react-native';
import {Alert} from 'react-native';

export const onDisplayNotification = async (id, title, body) => {
  // Request permissions (required for iOS)
  await notifee.requestPermission();

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'local1998',
    name: 'Channel with custom sound',
  });

  // Display a notification
  await notifee.displayNotification({
    id,
    title,
    body,
    android: {
      channelId,
      sound: 'hollow',
      actions: [
        {
          title: 'Snooze &#128564;',
          icon: 'https://icons8.com/icon/70109/snooze',
          pressAction: {
            id: 'snooze',
          },
        },
        {
          title: 'Reply',
          icon: 'https://my-cdn.com/icons/reply.png',
          pressAction: {
            id: 'default',
          },
        },
      ],
    },
  });
};

export const cancelNotification = async notificationId => {
  await notifee.cancelNotification(notificationId);
};

export const onCreateTriggerNotification = async (title, body, time) => {
  let date = time.split(' ');
  let grpOne = date[0].split('-').reverse();

  let grpTwo = date[1].split(':');
  let sign = date[2];
  let hour = parseInt(grpTwo[0], 10);
  grpTwo[0] =
    sign === 'am' ? (hour < 12 ? hour : '00') : hour < 12 ? hour + 12 : hour;

  const modifiedDate = [...grpOne, ...grpTwo, 0, 0];
  const fireDate = new Date(...modifiedDate);

  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'local1999',
    name: 'Channel with custom sound',
    sound: 'hollow',
    lights: true,
    vibration: false,
  });
  // Create a time-based trigger
  const trigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: fireDate.getTime(),
  };
  // Create a trigger notification
  try {
    await notifee.createTriggerNotification(
      {
        title,
        body,
        android: {
          channelId,
          // sound: 'hollow',
        },
      },
      trigger,
    );
  } catch (err) {
    Alert.alert(
      'Hey...',
      'Check your trigger date, \nTrigger time should be future',
    );
  }
};

export const notifeeEventListner = async () => {
  const initialNotification = await notifee.getInitialNotification();

  if (initialNotification) {
    console.log(
      'Notification caused application to open',
      initialNotification.notification,
    );
    console.log(
      'Press action used to open the app',
      initialNotification.pressAction,
    );
  }

  notifee.onForegroundEvent(({type, detail}) => {
    switch (type) {
      case EventType.DISMISSED:
        console.log('User dismissed notification', detail.notification);
        break;
      case EventType.PRESS:
        console.log('User pressed notification', detail.notification);
        break;
    }
  });
};
