import {ILogin} from '../interfaces';
import {LogProfile} from '../../redux/reducers/userReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = (values: ILogin) => {
  return async (dispatch: (arg0: {payload: any; type: string}) => void) => {
    try {
      const response = await fetch('http://192.168.1.138:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      try {
        await AsyncStorage.setItem('token', result.token);
        await dispatch(LogProfile());
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
