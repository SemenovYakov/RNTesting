import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import {setupStore} from './redux/store/store';
import {HomePage} from './screens/Home';
import {Profile} from './screens/Profile';
import {Registration} from './screens/Registration';
import {LoginScreen} from './screens/LoginScreen';

const Stack = createNativeStackNavigator();
const store = setupStore();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Sign in" component={LoginScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Sign up" component={Registration} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
