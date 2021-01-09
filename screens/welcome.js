import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';

import { SafeView } from '../components';

export default function Welcome() {
  return (
    <SafeView>
      <StatusBar animated backgroundColor="#cccccc" />
      <Text>Hello SafeView</Text>
    </SafeView>
  );
}

const styles = StyleSheet.create({});
