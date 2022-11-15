import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    margin: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
  },
  searchBar__unclicked: {
    flexDirection: 'row',
    color: 'black',
    margin: 5,
    padding: 3,
    borderWidth: 2,
    width: '95%',
    alignItems: 'center',
  },
  searchBar__clicked: {
    flexDirection: 'row',
    color: 'black',
    margin: 5,
    padding: 3,
    borderWidth: 2,
    width: 200,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
});
export default styles;
