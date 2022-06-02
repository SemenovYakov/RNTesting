import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Navigation} from '../components/interfaces';

export const HomePage = ({navigation}: Navigation) => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.textButton}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Sign in')}>
        <Text style={styles.textButton}>Sign in</Text>
      </TouchableOpacity>
   
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeButton: {
    backgroundColor: 'wheat',
    width: '50%',
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  textButton: {fontFamily: 'Verdana', fontSize: 20, color: 'black'},
});
