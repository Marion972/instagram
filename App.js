import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './components/Detail';
import Actualité from './components/Actualité';
import Login from './components/Login';
import Register from './components/Register';

const Stack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Actualité" component={Actualité} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App;
