import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import { Regular } from '../../config/Font';

const Item = ({title, url}) => (
  <TouchableOpacity style={styles.item}>
    <Image source={{uri: url}} style={styles.image} width={60} height={60} />
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const Category = props => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={props.data}
        renderItem={({item}) => <Item title={item.name} url={item.url} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 100,
    width: '97%',
    alignSelf: 'flex-end',
    borderStartStartRadius: 10,
    borderStartEndRadius: 10,
  },
  item: {
    padding: 15,
    alignItems: 'center',
  },
  image: {
    borderRadius: 50,
  },
  text: {
    color: '#21003D',
    fontSize: 10,
    fontFamily: Regular,
  },
});
