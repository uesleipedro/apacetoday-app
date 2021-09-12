import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView
} from 'react-native';

import VideoList from '../components/VideoList';

export default function VideosScreen() {
  return (
    
      <SafeAreaView
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <StatusBar backgroundColor='#2c5288' />

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