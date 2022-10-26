import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {View, Pressable, Text, ScrollView} from 'react-native';
import {RootStackProps} from '../App';
import categories from '../resources/categories';
import styles from '../styles/SelectionPage';

type Props = {
  navigation: NativeStackNavigationProp<RootStackProps, 'Categories'>;
};

function CategoriesPage({navigation}: Props) {
  const [categoriesISO, setCategoriesISO] = useState<Array<Object>>([]);
  useEffect(() => {
    setCategoriesISO(categories);
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View>
        {categories.map((category: any, idx: number) => {
          return (
            <Pressable
              key={idx}
              onPress={() => {
                navigation.navigate('Home', {category});
              }}>
              <Text style={styles.selection}>{category}</Text>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default CategoriesPage;
