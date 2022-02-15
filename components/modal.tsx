import Modal from 'react-native-modal';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {takePhotoFromLibrary} from '../components/ProfileIconFunctions';
import {takePhotoFromCamera} from '../components/ProfileIconFunctions';
import {ModalInterface} from './interfaces';

export const ModalComponent = ({
  setImage,
  showModal,
  setShowModal,
}: ModalInterface) => {
  const CloseModalOpenCamera = () => {
    setShowModal(false);
    setTimeout(() => {
      takePhotoFromCamera(setImage);
    }, 750);
  };
  const CloseModalOpenLibrary = () => {
    setShowModal(false);
    setTimeout(() => {
      takePhotoFromLibrary(setImage);
    }, 750);
  };
  return (
    <Modal
      isVisible={showModal}
      style={styles.modal}
      onBackdropPress={() => setShowModal(false)}
      animationInTiming={700}
      animationOutTiming={700}>
      <View style={styles.modalWindow}>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={CloseModalOpenCamera}>
          <Text style={styles.modalButtonText}>Take photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={CloseModalOpenLibrary}>
          <Text style={styles.modalButtonText}>Take from library</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {margin: 0, width: '100%', justifyContent: 'flex-end'},
  modalButton: {
    backgroundColor: '#1eb',
    width: '70%',
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  modalButtonText: {
    fontFamily: 'Verdana',
    fontSize: 20,
    color: 'black',
  },
  modalWindow: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
