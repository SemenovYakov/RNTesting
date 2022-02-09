import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {
  ImageBackground,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};

export const FirstScreen = ({navigation}: Props) => {
  const [image, setImage] = useState('');


  const takePhotoFromLibrary = () => {
    ImagePicker.openPicker({}).then(item => {
      setImage(item.path);
    });
  };


  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      cropping: false,
    }).then(item => {
      setImage(item.path);
    });
  };


  const [tapDisable, setTapDisabled] = useState(false);
  const [text, setText] = useState('');
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setTapDisabled(false);
      }}>
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.mainTitle}>First Page</Text>
        <Text style={styles.mainTitle}>{text}</Text>
        <TextInput
          style={styles.mainInput}
          onFocus={() => setTapDisabled(true)}
          onChangeText={item => setText(item)}
        />
        <TouchableOpacity
          disabled={tapDisable}
          style={styles.mainButton}
          onPress={() => navigation.navigate('Second Page')}>
          <Text style={styles.textButton}>Second Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainButton}
          disabled={tapDisable}
          onPress={() => navigation.navigate('Camera')}>
          <Text style={styles.textButton}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainButton}
          disabled={tapDisable}
          onPress={() => navigation.navigate('Map')}>
          <Text style={styles.textButton}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takePhotoFromCamera}
          style={styles.imageContainer}>
          <ImageBackground
            source={{
              uri: image,
            }}
            style={{width: 200, height: 200}}
            imageStyle={{borderRadius: 50}}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 200,
    height: 200,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
  },
  mainContainer: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
  mainInput: {
    backgroundColor: 'lightgray',
    width: '70%',
    height: 40,
    margin: 10,
    borderRadius: 10,
  },
  mainTitle: {
    color: 'yellow',
    fontFamily: 'Verdana',
    fontSize: 30,
    margin: 10,
  },
  mainButton: {
    backgroundColor: 'wheat',
    width: '50%',
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  textButton: {
    fontFamily: 'Verdana',
    fontSize: 20,
    color: 'black',
  },
});
