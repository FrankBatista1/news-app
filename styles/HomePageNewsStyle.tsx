import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  newsList: {
    marginHorizontal: 10,
  },
  trending: {
    color: 'black',
    fontSize: 17
  },
  nav: {
    padding: 5,
    fontSize: 18,
    alignItems: 'center',
  },
  selection: {
    color: 'black',
    backgroundColor: 'grey',
    margin: 5,
    padding: 3,
    borderWidth: 2,
    fontSize: 20
  },
  search: {
    color: 'black',
    margin: 5,
    padding: 3,
    borderWidth: 2,
    width: 200
  },
  newsContainer: {
    paddingBottom: 50
  },
  newsTitle: {
    fontSize: 18,
    paddingTop: 10,
    color: 'black',
    textDecorationLine: 'underline',
  },
});
export default styles