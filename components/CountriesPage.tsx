import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {View, Pressable, Text} from 'react-native';
import { RootStackProps } from '../App';
import countries from '../resources/countries'


type Props = {
  navigation: NativeStackNavigationProp<RootStackProps, "Countries">;
};


function CountriesPage({navigation}: Props) {
 
  const [countriesISO, setCountriesISO ] = useState<Object>({})
  useEffect(() => {
    setCountriesISO(countries)
  }, []);
  return (
  <View>
   {
    countries.map((country:any, idx:number) => {
      return (
        <Pressable key={idx} onPress={()=> {navigation.navigate('Home', {country})}}>
          <Text  >{country.countryName}</Text>
        </Pressable>
      )
    })
   }
  </View>
  )
}

export default CountriesPage;
