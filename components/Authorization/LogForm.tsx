import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {StyledButton} from '../button';

export const LoginForm = ({formikprops}: any) => {
  const [security, setSecurity] = useState(true);
  const ShowPass = () => {
    security === true ? setSecurity(false) : setSecurity(true);
  };
  return (
    <View style={styles.body}>
      <View style={styles.field}>
        <Text style={styles.registrationFieldsTitle}>Email</Text>
        <TextInput
          style={styles.registrationInput}
          onChangeText={formikprops.handleChange('email')}
          value={formikprops.values.email}
        />
        <Text style={styles.errorText}>{formikprops.errors.email}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.registrationFieldsTitle}>Password</Text>
        <View style={styles.passwordField}>
          <TextInput
            style={styles.registrationInput}
            onChangeText={formikprops.handleChange('password')}
            value={formikprops.values.password}
            secureTextEntry={security}
          />
          <TouchableOpacity style={styles.showPassword} onPress={ShowPass} />
        </View>
        <Text style={styles.errorText}>{formikprops.errors.password}</Text>
      </View>
      <StyledButton buttonText={'Login'} func={formikprops.handleSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  passwordField: {flexDirection: 'row', alignItems: 'center'},
  body: {width: '100%', alignItems: 'center'},
  showPassword: {
    width: 25,
    height: 25,
    borderRadius: 8,
    backgroundColor: '#20B2AA',
    marginLeft: 5,
  },

  errorText: {
    color: 'red',
    fontFamily: 'Verdana',
    fontSize: 12,
    lineHeight: 12,
  },
  field: {width: '70%'},
  registrationInput: {
    color: 'black',
    backgroundColor: 'lightgray',
    width: '100%',
    height: 40,
    borderRadius: 10,
  },
  registrationFieldsTitle: {
    color: 'black',
    fontFamily: 'Verdana',
    fontSize: 16,
  },
});
