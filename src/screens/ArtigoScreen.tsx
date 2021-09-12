import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar
} from 'react-native';

import ArtigoList from '../components/ArtigoList';

export default function ArtigoScreen() {
  return (
    <SafeAreaView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <StatusBar backgroundColor='#2c5288' />

      <ArtigoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff'
  }
});