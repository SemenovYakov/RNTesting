import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';

export const MapPage = () => {
  return (
    <View style={styles.body}>
      <MapView
        style={styles.map}
        region={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0,
          longitudeDelta: 0,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  map: {...StyleSheet.absoluteFillObject},
});
