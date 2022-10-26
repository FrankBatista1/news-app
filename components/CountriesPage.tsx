import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {View, Pressable, Text, ScrollView} from 'react-native';
import {RootStackProps} from '../App';
import countries from '../resources/countries';
import styles from '../styles/SelectionPage';

type Props = {
  navigation: NativeStackNavigationProp<RootStackProps, 'Countries'>;
};

function CountriesPage({navigation}: Props) {
  const [countriesISO, setCountriesISO] = useState<Object>({});
  useEffect(() => {
    setCountriesISO(countries);
  }, []);
  return (
  <ScrollView>
    <View  style={styles.container}>
      {countries.map((country: any, idx: number) => {
        return (
          <Pressable
          key={idx}
          onPress={() => {
            navigation.navigate('Home', {country});
          }}>
            <Text style={styles.selection}>{country.countryName}</Text>
          </Pressable>
        );
      })}
    </View>
  </ScrollView>
  );
}

export default CountriesPage;
