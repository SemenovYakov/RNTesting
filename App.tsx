import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CameraPage} from './screens/CameraScreen';
import {HomePage} from './screens/Home';
import {MapPage} from './screens/MapScreen';
import {Profile} from './screens/Profile';
import {Registration} from './screens/Registration';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Camera" component={CameraPage} />
        <Stack.Screen name="Map" component={MapPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
