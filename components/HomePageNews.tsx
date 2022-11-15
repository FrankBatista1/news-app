import React, {useEffect, useState} from 'react';
import {Linking, Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import {API_KEY} from '@env';
import {articlesResponseType, articleType} from '../types/articles';
import styles from '../styles/HomePageNewsStyle';
import SearchBar from './SearchBar';

const HomePageNews = (props: any) => {
  const [search, onChangeSearch] = useState("");
  const [articles, setArticles] = useState<Array<articleType>>([]);
  const [country, setCountry] = useState<String>('US');
  const [category, setCategory] = useState<String>('General');
  const apiKey = API_KEY;
  async function getNewsFromApi(): Promise<any> {
    try {
      const articlesFrontPageResponseJson = await fetch(
        `https://newsapi.org/v2/top-headlines?pageSize=100&country=${country}&category=${category}&apiKey=${apiKey}`,
      );
      const articlesResponse: articlesResponseType =
        await articlesFrontPageResponseJson.json();
      setArticles(articlesResponse.articles);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    if (props.route.params?.country?.nameISO3366) {
      setCountry(props.route.params.country?.nameISO3366);
    }
    if (props.route.params?.category) {
      setCategory(props.route.params?.category);
    }
  }, [props.route.params]);

  useEffect(() => {
    getNewsFromApi();
  }, [country,category]);

  return (
    <View>
      <View style={styles.nav}>
        <Text style={styles.trending}>Trending news in</Text>
        <Pressable
          onPress={() => props.navigation.navigate('Countries', {country})}>
          <Text style={styles.selection}>Country: {country}</Text>
        </Pressable>
        <Pressable
          onPress={() => props.navigation.navigate('Categories', {category})}>
          <Text style={styles.selection}>Category: {category}</Text>
        </Pressable>
      <SearchBar></SearchBar>
      </View>
      <View style={styles.newsContainer}>
        <View style={styles.newsList}>
          {articles.map((article: articleType, idx) => {
            return (
              <Pressable onPress={() => Linking.openURL(article.url)} key={idx}>
                <Text style={styles.newsTitle}>{article.title} </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default HomePageNews;
