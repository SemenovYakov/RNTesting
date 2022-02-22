import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import {StyledButton} from '../components/button';
import {ModalComponent} from '../components/ImageModal';
import {useAppDispatch, useAppSelector} from '../redux/store/hooks';
import {LogOutUser} from '../redux/reducers/userReducer';
export const Profile = () => {
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const {currentUser} = useAppSelector(state => state.userReducer);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Profile</Text>
      <Text style={styles.mainTitle}>{currentUser.username}</Text>
      <Text style={styles.mainTitle}>{currentUser.age}</Text>
      <Text style={styles.mainTitle}>{currentUser.email}</Text>
      <StyledButton
        buttonText={'Log out'}
        func={() => {
          dispatch(LogOutUser());
        }}
      />
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
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
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainTitle: {
    color: 'black',
    fontFamily: 'Verdana',
    fontSize: 30,
    margin: 10,
  },
});
