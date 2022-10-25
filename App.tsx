import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomePage from './components/HomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CountriesPage from './components/CountriesPage';
import CategoriesPage from './components/CategoriesPage';

export type RootStackProps = {
  Home: {
    country?: object;
    category?: String;
  }
  Countries: undefined;
  Categories: undefined;
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
          options={{title: 'Choose country'}}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesPage}
          options={{title: 'Choose category'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
