import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface ModalInterface {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export type Navigation = {
  navigation: NativeStackNavigationProp<ParamListBase>;
};
export interface IUser {
  username: string;
  age: string;
  email: string;
  password: string;
  image: string;
}
