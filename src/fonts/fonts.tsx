import {Platform} from 'react-native';

export const getFontFamily = () => {
  if (Platform.OS === 'ios') {
    return 'PlayfairDisplay-Regular';
  } else if (Platform.OS === 'android') {
    return 'PlayfairDisplay-Regular';
  } else {
    return 'serif'; // Fallback font for other platforms
  }
};
