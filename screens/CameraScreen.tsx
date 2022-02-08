import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';

export const CameraPage = () => {
  const [{cameraRef}, {takePicture}] = useCamera();

  const TakePicture = async () => {
    try {
      const data = await takePicture();
      const filePath = data.uri;
      const newFilePath = RNFS.ExternalDirectoryPath + '/PhotoTest.jpg';
      RNFS.moveFile(filePath, newFilePath);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}>
        <TouchableOpacity
          style={styles.takePictureButton}
          onPress={() => TakePicture()}
        />
      </RNCamera>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  takePictureButton: {
    marginBottom: 40,
    backgroundColor: 'rgba(255, 247, 247, 0.75)',
    width: 70,
    height: 70,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#1eb800',
  },
});
