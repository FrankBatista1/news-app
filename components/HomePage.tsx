import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import HomePageNews from './HomePageNews';
import styles from '../styles/HomePageStyles';

const HomePage = () => {
  return (
    <View>
      <ScrollView style={styles.containter}>
        <View style={styles.header}>
          <Text style={styles.title}>NewNews</Text>
        </View>
        <View style={{height: '100%'}}>
          <HomePageNews></HomePageNews>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;
