import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import {setupStore} from './redux/store/store';
import {CameraPage} from './screens/CameraScreen';
import {HomePage} from './screens/Home';
import {MapPage} from './screens/MapScreen';
import {Profile} from './screens/Profile';
import {Registration} from './screens/Registration';
import {Login} from './screens/LoginScreen';

const Stack = createNativeStackNavigator();
const store = setupStore();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Sign in" component={Login} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Sign up" component={Registration} />
          <Stack.Screen name="Camera" component={CameraPage} />
          <Stack.Screen name="Map" component={MapPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
