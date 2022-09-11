import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {API_KEY} from '@env';
import {articlesResponseType, articleType} from '../types/articles';

const HomePageNews = () => {
  const [articles, setArticles] = useState<Array<articleType>>([]);
  const [country, setCountry] = useState<String>('Choose country');
  const apiKey = API_KEY;
  async function getNewsFromApi(): Promise<any> {
    try {
      const articlesFrontPageResponseJson = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      );
      const articlesResponse: articlesResponseType =
        await articlesFrontPageResponseJson.json();
      setArticles(articlesResponse.articles);
      console.log(articles);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    getNewsFromApi();
  }, []);
  return (
    <>
      <Text> Trending news in </Text>
      <ScrollView style={styles.container}>
        {articles.map((article: articleType, idx) => {
            return (
              <Pressable style={styles.newsTitle} onPress={() => Linking.openURL(article.url)} key={idx}>
                <Text>{article.title} </Text>
              </Pressable>
            );
        })}
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  newsTitle: {
    fontSize: 20,
    paddingTop: 10,
    color: 'black',
  },
});

export default HomePageNews;
