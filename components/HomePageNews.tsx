import React, {useEffect, useState} from 'react';
import {Linking, Pressable, ScrollView, Text, View} from 'react-native';
import {API_KEY} from '@env';
import {articlesResponseType, articleType} from '../types/articles';
import styles from '../styles/HomePageNewsStyle';

const HomePageNews = (props: any) => {
  const [articles, setArticles] = useState<Array<articleType>>([]);
  const [country, setCountry] = useState<String>('us');
  const [category, setCategory] = useState<String>(
    'Choose category (default no category)',
  );
  const apiKey = API_KEY;
  async function getNewsFromApi(): Promise<any> {
    try {
      const articlesFrontPageResponseJson = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`,
      );
      const articlesResponse: articlesResponseType =
        await articlesFrontPageResponseJson.json();
      setArticles(articlesResponse.articles);
    } catch (error) {
      throw error;
    }
  }
  
  useEffect(() => {
    if (props.route.params) {
      setCountry(props.route.params.country.nameISO3366);
    }
  }, [props.route.params]);

  useEffect(() => {
    getNewsFromApi();
  },[country]);
  

  return (
    <View>
      <View style={styles.nav}>
        <Text style={styles.trending}>Trending news in</Text>
        <Pressable
          onPress={() => props.navigation.navigate('Countries', {country})}>
          <Text style={styles.selection}>Choose country: {country}</Text>
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
