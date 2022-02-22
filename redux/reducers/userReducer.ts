import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../components/interfaces';

interface CurrentUser {
  currentUser: {
    username: string;
    age: string;
    email: string;
    image: string;
  };
  isAuth: boolean;
}

const initialState: CurrentUser = {
  currentUser: {
    username: '',
    age: '',
    email: '',
    image: '',
  },
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LogInUser(state, action: PayloadAction<IUser>) {
      state.currentUser.username = action.payload.username;
      state.currentUser.age = action.payload.age;
      state.currentUser.email = action.payload.email;
      state.currentUser.image = action.payload.image;
    },
    LogProfile(state) {
      state.isAuth = true;
    },
    LogOutUser(state) {
      state.currentUser = {
        username: '',
        age: '',
        email: '',
        image: '',
      };
      state.isAuth = false;
      AsyncStorage.removeItem('token');
    },
  },
});

export const {LogInUser, LogOutUser, LogProfile} = userSlice.actions;

export default userSlice.reducer;
