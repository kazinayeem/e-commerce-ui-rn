import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const SearchBar = () => {
  return (
    <View>
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
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFFF',
    height: 50,
    elevation: 1,
    width: '95%',
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
});
