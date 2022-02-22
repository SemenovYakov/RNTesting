import AsyncStorage from '@react-native-async-storage/async-storage';

import {LogInUser} from '../redux/reducers/userReducer';

export const Authorization = () => {
  return async (dispatch: (arg0: {payload: any; type: string}) => void) => {
    try {
      const value = await AsyncStorage.getItem('token');
      const response = await fetch(
        'http://192.168.1.138:3000/auth/authorization',
        {
          headers: {Authorization: `Bearer ${value}`},
        },
      );
      const result = await response.json();
      console.log('res', result);

      dispatch(LogInUser(result.user));
      AsyncStorage.setItem('token', result.token);
      console.log('tokenlast', AsyncStorage.getItem('token'));
    } catch (error) {
      console.log(error);
      AsyncStorage.removeItem('token');
    }
  };
};
