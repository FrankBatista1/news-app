import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {View, Pressable, Text} from 'react-native';
import {RootStackProps} from '../App';
import categories from '../resources/categories';

type Props = {
  navigation: NativeStackNavigationProp<RootStackProps, 'Categories'>;
};

function CategoriesPage({navigation}: Props) {
  const [categoriesISO, setCategoriesISO] = useState<Array<Object>>([]);
  useEffect(() => {
    setCategoriesISO(categories);
  }, []);
  return (
    <View>
      {categories.map((category: any, idx: number) => {
        return (
          <Pressable
            key={idx}
            onPress={() => {
              navigation.navigate('Home', {category});
            }}>
            <Text>{category}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default CategoriesPage;
