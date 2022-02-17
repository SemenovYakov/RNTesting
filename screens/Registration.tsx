import React, {useState} from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';
import {StyledButton} from '../components/button';
import {Submit} from '../components/RegistrationRequest';
import {RegModalComponent} from '../components/regModal';
const RegSchema = yup.object({
  username: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().required(),
  password: yup.string().required().min(8),
  image: yup.string(),
});

export const Registration = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <Text style={styles.registrationTitle}>Registration</Text>
        <Formik
          validationSchema={RegSchema}
          initialValues={{
            username: '',
            age: '',
            email: '',
            password: '',
            image: '',
          }}
          onSubmit={async values => {
            try {
              await Submit(values);
            } catch (error) {
              console.log(error);
            }
          }}>
          {({values, handleChange, handleSubmit, errors}) => (
            <View style={{width: '100%', alignItems: 'center'}}>
              <View style={styles.field}>
                <Text style={styles.registrationFieldsTitle}>Username</Text>
                <TextInput
                  style={styles.registrationInput}
                  onChangeText={handleChange('username')}
                  value={values.username}
                />
                <Text style={styles.errorText}>{errors.username}</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.registrationFieldsTitle}>Age</Text>
                <TextInput
                  style={styles.registrationInput}
                  onChangeText={handleChange('age')}
                  value={values.age}
                  keyboardType="numeric"
                />
                <Text style={styles.errorText}>{errors.age}</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.registrationFieldsTitle}>Email</Text>
                <TextInput
                  style={styles.registrationInput}
                  onChangeText={handleChange('email')}
                  value={values.email}
                />
                <Text style={styles.errorText}>{errors.email}</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.registrationFieldsTitle}>Password</Text>
                <TextInput
                  style={styles.registrationInput}
                  onChangeText={handleChange('password')}
                  value={values.password}
                />
                <Text style={styles.errorText}>{errors.password}</Text>
              </View>
              <StyledButton buttonText={'Create'} func={handleSubmit} />
            </View>
          )}
        </Formik>
        <RegModalComponent showModal={showModal} setShowModal={setShowModal} />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontFamily: 'Verdana',
    fontSize: 12,
    lineHeight: 12,
  },
  body: {alignItems: 'center'},
  field: {width: '70%'},
  registrationInput: {
    color: 'black',
    backgroundColor: 'lightgray',
    width: '100%',
    height: 40,
    borderRadius: 10,
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
