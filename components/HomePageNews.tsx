import React, {useEffect, useState} from 'react';
import {Linking, Pressable, ScrollView, Text, View} from 'react-native';
import {API_KEY} from '@env';
import {articlesResponseType, articleType} from '../types/articles';
import styles from '../styles/HomePageNewsStyle';

const HomePageNews = (props:any) => {
  const [articles, setArticles] = useState<Array<articleType>>([]);
  const [country, setCountry] = useState<String>(
    'Choose country (default United States)',
  );
  const [category, setCategory] = useState<String>(
    'Choose category (default no category)',
  );
  const apiKey = API_KEY;
  async function getNewsFromApi(): Promise<any> {
    try {
      const articlesFrontPageResponseJson = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      );
      const articlesResponse: articlesResponseType =
        await articlesFrontPageResponseJson.json();
      setArticles(articlesResponse.articles);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    getNewsFromApi();
  }, []);
  return (
    <View>
      <View style={styles.nav}>
        <Text style={styles.trending}>Trending news in</Text>
        <Pressable onPress={() => props.navigation.navigate('Countries', {name: 'Countries'})}>
          <Text style={styles.selection}>{country}</Text>
        </Pressable>
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
