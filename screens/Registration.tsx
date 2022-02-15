import React, {useState} from 'react';
import {
  ImageBackground,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ModalComponent} from '../components/modal';

export const Registration = () => {
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <Text style={styles.registrationTitle}>Registration</Text>
        <View style={styles.field}>
          <Text style={styles.registrationFieldsTitle}>Name</Text>
          <TextInput style={styles.registrationInput} />
        </View>
        <View style={styles.field}>
          <Text style={styles.registrationFieldsTitle}>Surname</Text>
          <TextInput style={styles.registrationInput} />
        </View>
        <View style={styles.field}>
          <Text style={styles.registrationFieldsTitle}>Age</Text>
          <TextInput style={styles.registrationInput} />
        </View>
        <View style={styles.field}>
          <Text style={styles.registrationFieldsTitle}>Email</Text>
          <TextInput style={styles.registrationInput} />
        </View>
        <View style={styles.field}>
          <Text style={styles.registrationFieldsTitle}>Password</Text>
          <TextInput style={styles.registrationInput} />
        </View>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => setShowModal(true)}>
          <ImageBackground
            source={{
              uri: image,
            }}
            style={{width: 200, height: 200}}
            imageStyle={{borderRadius: 50}}
          />
          <ModalComponent
            showModal={showModal}
            setImage={setImage}
            setShowModal={setShowModal}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.registrationButton}>
          <Text style={styles.textButton}>Create</Text>
        </TouchableOpacity>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  body: {alignItems: 'center'},
  imageContainer: {
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 200,
    height: 200,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
  field: {margin: 10, width: '70%'},
  registrationInput: {
    backgroundColor: 'lightgray',
    width: '100%',
    height: 40,
    borderRadius: 10,
  },
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
  registrationTitle: {
    color: 'black',
    fontFamily: 'Verdana',
    fontSize: 30,
    margin: 10,
  },
  registrationFieldsTitle: {
    color: 'black',
    fontFamily: 'Verdana',
    fontSize: 16,
  },
});
