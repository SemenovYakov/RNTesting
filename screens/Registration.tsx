import React, {useState} from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';

import {Registrate} from '../components/Registration/RegRequest';
import {RegModalComponent} from '../components/Registration/regModal';
import {RegistrationForm} from '../components/Registration/RegForm';
const RegSchema = yup.object({
  username: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().required(),
  password: yup.string().required().min(8),
  image: yup.string(),
});

export const Registration = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={styles.body}>
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
            await Registrate(values);
            await setShowModal(true);
          }}>
          {props => <RegistrationForm formikprops={props} />}
        </Formik>
        <RegModalComponent showModal={showModal} message={'message'} />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  body: {alignItems: 'center'},
  registrationTitle: {
    color: 'black',
    fontFamily: 'Verdana',
    fontSize: 30,
    margin: 10,
  },
});
