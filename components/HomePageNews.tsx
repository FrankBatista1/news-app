import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {API_KEY} from '@env';
import {articlesResponseType, articleType} from '../types/articles';

const HomePageNews = () => {
  const [articles, setArticles] = useState<Array<articleType>>([]);
  const apiKey = API_KEY;
  async function getNewsFromApi(): Promise<any> {
    try {
      const articlesFrontPageResponseJson = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      );
      const articlesResponse: articlesResponseType =
        await articlesFrontPageResponseJson.json();
      setArticles(articlesResponse.articles);
      console.log(articles)
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getNewsFromApi();
  }, []);
  return (
    <View style={styles.container}>
      {articles.map((article: articleType, idx) => (
        <Text style={styles.newsTitle} key={idx}>{article.title}</Text>
      ))}
    </View>
  );
};
const styles = StyleSheet.create ({
  container: {
    padding: 10
  },
  newsTitle: {
    fontSize: 20,
    paddingTop: 10,
  }
})

export default HomePageNews;
