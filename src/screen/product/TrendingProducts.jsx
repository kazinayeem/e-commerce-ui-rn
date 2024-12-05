import {
  FlatList,
  Image,
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
import {Medium, Regular} from '../../config/Font';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Item = ({item, navigation}) => {
  return (
    <View
      style={{
        width: responsiveWidth(48),
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: responsiveHeight(1),
        height: responsiveHeight(40),
        marginHorizontal: responsiveWidth(1),
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
        style={{paddingHorizontal: responsiveWidth(2)}}>
        <Text
          style={{
            fontSize: responsiveFontSize(2.1),
            fontFamily: Medium,
            fontWeight: '700',
          }}>
          {item.title.substring(0, 15)}..
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(1.2),
            fontFamily: Regular,
            fontWeight: '700',
          }}>
          {item.description.substring(0, 40)}
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
      .get('https://dummyjson.com/products')
      .then(res => setproduct(res.data.products))
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
