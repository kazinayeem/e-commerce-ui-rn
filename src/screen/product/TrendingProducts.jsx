import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import All_Featured from './All-Featured';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const Item = ({item, navigation}) => {
  return (
    <View
      style={{
        width: '48%',
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 5,
        height: 310,
        margin: 3,
      }}>
      <Image
        style={{borderRadius: 10, alignSelf: 'center'}}
        source={{
          uri: item.images[0],
        }}
        width={'100%'}
        height={'75%'}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleProduct', {id: item.id})}
        style={{paddingHorizontal: 5}}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Montserrat-Medium',
            fontWeight: '700',
          }}>
          {item.title.substring(0, 15)}......
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontFamily: 'Montserrat-Regular',
            fontWeight: '700',
          }}>
          {item.description.substring(0, 40)}.....
        </Text>
        <Text>₹{item.price}</Text>
      </TouchableOpacity>
    </View>
  );
};
const TrendingProducts = () => {
  const [product, setproduct] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then(res => setproduct(res.data))
      .catch(e => {
        console.log(e);
      });
  }, []);
  return (
    <View>
      <SearchBar />
      <All_Featured title={`${product.length}+ Iteams`} />
      {product.length === 0 ? (
        <>
          <ActivityIndicator size="large" color="#00ff00" />
          <ActivityIndicator size="large" color="#00ff00" />
          <ActivityIndicator size="large" color="#00ff00" />
          <ActivityIndicator size="large" color="#00ff00" />
        </>
      ) : (
        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          numColumns={2}
          data={product}
          renderItem={({item}) => <Item item={item} navigation={navigation} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default TrendingProducts;

const styles = StyleSheet.create({});
