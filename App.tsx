import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CameraPage} from './screens/CameraScreen';
import {FirstScreen} from './screens/FirstScreen';
import {MapPage} from './screens/MapScreen';
import {SecondScreen} from './screens/SecondScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First Page" component={FirstScreen} />
        <Stack.Screen name="Second Page" component={SecondScreen} />
        <Stack.Screen name="Camera" component={CameraPage} />
        <Stack.Screen name="Map" component={MapPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
