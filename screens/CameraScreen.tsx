import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import {Props} from './FirstScreen';

export const CameraPage = ({navigation}: Props) => {
  const [{cameraRef}, {takePicture}] = useCamera();

  const [cameraType, setCameraType] = useState('back');
  const CameraTypeHandler = () => {
    if (cameraType === 'back') {
      setCameraType('front');
    } else {
      setCameraType('back');
    }
  };

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
      <RNCamera ref={cameraRef} style={styles.preview} type={cameraType}>
        <View style={styles.cameraButtons}>
          <TouchableOpacity
            style={styles.openPhotos}
            onPress={() => navigation.navigate('Photos')}
          />
          <TouchableOpacity
            style={styles.takePictureButton}
            onPress={() => TakePicture()}
          />
          <TouchableOpacity
            style={styles.changeCamera}
            onPress={() => CameraTypeHandler()}
          />
        </View>
      </RNCamera>
    </View>
  );
};
const styles = StyleSheet.create({
  cameraButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  takePictureButton: {
    marginBottom: 40,
    marginHorizontal: 70,
    backgroundColor: 'rgba(255, 247, 247, 0.75)',
    width: 70,
    height: 70,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#1eb800',
  },
  changeCamera: {
    marginBottom: 40,
    backgroundColor: 'rgba(216, 137, 137, 0.75)',
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#1eb800',
  },
  openPhotos: {
    marginBottom: 40,
    backgroundColor: 'rgba(27, 198, 204, 0.75)',
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#1eb800',
  },
});
