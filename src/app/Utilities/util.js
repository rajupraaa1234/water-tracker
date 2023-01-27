import {Platform, ToastAndroid, AlertIOS} from 'react-native';

export const showToastMessage = message => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(message);
    }
};