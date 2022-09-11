import {NavigationContainer} from '@react-navigation/native';
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CountriesPage from './components/CountriesPage';


const Stack = createNativeStackNavigator();

const App = () => {
  const [country, setCountry] = useState<String>(
    'Choose country (default United States)',
  );
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
