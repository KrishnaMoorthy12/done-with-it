import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

export default function SafeView({ children }) {
  return <SafeAreaView style={styles.safeView}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  safeView: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
