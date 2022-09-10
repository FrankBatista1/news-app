import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import API_KEY from 'react-native-dotenv'


const App = () => {
  const apiKey = API_KEY;
  const getNewsFromApi = () => {
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.articles)
        return json.articles;
      })
      .catch((error) => {
        console.error(error);
      });
  
  };
  useEffect(() => {
    getNewsFromApi()
},[])
  return (
    <View style={styles.containter}>
      <View style={styles.header} ><Text style={styles.title}> NewNews </Text></View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    padding: 30,
  },
  header: {
    alignItems: 'center'
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    color: 'black',
  },
});

export default App;
