import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomePage from './components/HomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false, title: 'NewNews'}}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
