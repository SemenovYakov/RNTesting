import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './interfaces';

export const StyledButton = ({buttonText, func}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.registrationButton} onPress={func}>
      <Text style={styles.textButton}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  textButton: {
    fontFamily: 'Verdana',
    fontSize: 20,
    color: 'black',
  },
  registrationButton: {
    backgroundColor: 'wheat',
    width: '50%',
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
