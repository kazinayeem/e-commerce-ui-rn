import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Regular } from '../../config/Font';

const Item = ({name, image}) => {
  console.log('categoryData', name, 'categoryData');
  return (
    <TouchableOpacity style={styles.item}>
      <Image
        source={{uri: image}}
        style={styles.image}
        width={60}
        height={60}
      />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const Category = props => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        data={props.data}
        renderItem={({item}) => <Item name={item.name} image={item.image} />}
        keyExtractor={item => item._id}
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
