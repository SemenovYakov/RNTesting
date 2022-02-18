import React from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';

import {SafeAreaView} from 'react-native-safe-area-context';
const LogSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});
import {LoginForm} from '../components/Authorization/LogForm';
import {Authorization} from '../components/Authorization/LogRequest';

export const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.body}>
        <Text style={styles.registrationTitle}>Authorization</Text>
        <Formik
          validationSchema={LogSchema}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={values => {
            Authorization(values);
          }}>
          {props => <LoginForm formikprops={props} />}
        </Formik>
      </SafeAreaView>
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
