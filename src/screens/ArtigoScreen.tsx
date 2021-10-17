import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar
} from 'react-native';

import ArtigoList from '../components/ArtigoList';
import colors from '../assets/styles/colors';

export default function ArtigoScreen() {
  return (
    <SafeAreaView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <StatusBar backgroundColor='#1a1a1a' />

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