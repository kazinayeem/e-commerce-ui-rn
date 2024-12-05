import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <Icon name="search" size={20} color="#BBBBBB" />
        <TextInput
          placeholder="Search Any Product"
          placeholderTextColor="#BBBBBB"
          style={styles.textInput}
        />
        <Icon name="microphone" size={20} color="#BBBBBB" />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    height: 50,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    width: '95%',
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
});
