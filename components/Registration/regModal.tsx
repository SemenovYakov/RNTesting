import Modal from 'react-native-modal';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {StackActions, useNavigation} from '@react-navigation/native';
import {StyledButton} from '../button';

export const RegModalComponent = ({message, showModal}) => {
  const navigation = useNavigation();
  const RoutRegModal = () => {
    navigation.dispatch(StackActions.replace('Sign in'));
  };
  return (
    <Modal isVisible={showModal} style={styles.modal}>
      <View style={styles.modalWindow}>
        <Text style={styles.modalText}>message</Text>
        <StyledButton buttonText={'OK'} func={RoutRegModal} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {margin: 0, width: '100%', justifyContent: 'center'},
  modalText: {
    fontFamily: 'Verdana',
    fontSize: 18,
    color: 'green',
    marginBottom: 30,
  },
  modalWindow: {
    borderRadius: 30,
    backgroundColor: 'white',
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
