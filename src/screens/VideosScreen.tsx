import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView
} from 'react-native';

import VideoList from '../components/VideoList';
import colors from '../assets/styles/colors';

export default function VideosScreen() {
  return (
    
      <SafeAreaView
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <StatusBar backgroundColor={colors.dark_gray} />

        <VideoList />
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f8f8ff'
  }
});