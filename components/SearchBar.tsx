import React from 'react';
import { TextInput, View, Keyboard, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import styles from '../styles/SearchBar';

interface SearchFunctionality {
  clicked: boolean;
  searchPhrase: string;
  setSearchPhrase: (val: string) => void;
  setClicked: Function;
  getNewsFromApi: Function;
}
const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
  getNewsFromApi
}: SearchFunctionality) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }>
        {!clicked &&<Icon
          name="magnifying-glass"
          size={20}
          color="black"
          style={{marginLeft: 1}}
        />}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <Icon
            name="cross"
            size={20}
            color="black"
            style={{right: 5}}
            onPress={() => {
              setSearchPhrase('');
              setClicked(false);
              Keyboard.dismiss();
              getNewsFromApi();
            }}
          />
        )}
      </View>
      {clicked && (
        <View>
          <Button
            title="Search"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
              getNewsFromApi(searchPhrase)
            }}></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

