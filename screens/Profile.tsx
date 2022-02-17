import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ModalComponent} from '../components/modal';

export const Profile = () => {
  // const [image, setImage] = useState('');
  // const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('http://192.168.1.138:3000/auth/users');
      const data = await res.json();
      return data;
    };
    getUsers()
      .then(result => {
        setUsers(result);
      })
      .catch(e => console.log(e));
  });

  //console.log(users);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Profile</Text>
      {users.map(item => (
        <Text style={{color:'red'}}>{item.age}</Text>
      ))}
      {/* <TouchableOpacity
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
      </TouchableOpacity> */}
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
