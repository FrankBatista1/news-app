import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomePage from './components/HomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CountriesPage from './components/CountriesPage';

export type RootStackProps = {
  Home: {
    country?: object;
  }
  Countries: undefined;
}
const Stack = createNativeStackNavigator<RootStackProps>();

const App = () => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false, title: 'NewNews'}}
        />
        <Stack.Screen
          name="Countries"
          component={CountriesPage}
          options={{title: 'Choosse country'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
