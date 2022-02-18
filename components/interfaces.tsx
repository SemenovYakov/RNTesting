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
export interface ILogin {
  email: string;
  password: string;
}

export interface ButtonProps {
  buttonText: string;
  func: any;
}
export interface IFormik {
  handleChange: (arg0: string) => ((text: string) => void) | undefined;
  values: {
    username: string | undefined;
    age: string | undefined;
    email: string | undefined;
    password: string | undefined;
  };
  errors: {
    username:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    age:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    email:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    password:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  };
  handleSubmit: any;
}
