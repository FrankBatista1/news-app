import React from 'react';
import {View, Text} from 'react-native';
import HomePageNews from './HomePageNews';
import styles from '../styles/HomePageStyles';

const HomePage = () => {

  return (
    <View style={styles.containter}>
      <View style={styles.header}>
        <Text style={styles.title}>NewNews</Text>
      </View>
      <View>
        <HomePageNews></HomePageNews>
      </View>
    </View>
  );
};


export default HomePage;
