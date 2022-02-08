import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export const SecondScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Second Page</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
  mainTitle: {
    color: 'yellow',
    fontFamily: 'Verdana',
    fontSize: 30,
    margin: 10,
  },
});
