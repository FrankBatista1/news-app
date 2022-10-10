import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import HomePageNews from './HomePageNews';
import styles from '../styles/HomePageStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackProps } from '../App';
import { RouteProp } from '@react-navigation/native';

type Props = {
  navigation: NativeStackNavigationProp<RootStackProps, "Home">;
  route: RouteProp<RootStackProps, "Home">
};

const HomePage = ({navigation, route}: Props) => {
  return (
    <ScrollView style={styles.containter}>
      <View style={styles.header}>
        <Text style={styles.title}>NewNews</Text>
      </View>
      <View style={{height: '100%'}}>
        <HomePageNews route={route} navigation={navigation}></HomePageNews>
      </View>
    </ScrollView>
  );
};

export default HomePage;
