import React, {useEffect, useState} from 'react';
import {View, Pressable, Text} from 'react-native';
import countries from '../resources/countries'

function CountriesPage() {
  const [countriesISO, setCountriesISO ] = useState<Object>({})
  useEffect(() => {
    setCountriesISO(countries)
  }, []);
  return (
  <View>
   {
    countries.map((countrie:any) => {
      return (
        <Pressable>
          <Text>{countrie.countryName}</Text>
        </Pressable>
      )
    })
   }
  </View>
  )
}

export default CountriesPage;
