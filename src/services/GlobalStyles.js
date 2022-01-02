import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
