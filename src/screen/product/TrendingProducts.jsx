import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Medium } from '../../config/Font';
import { takaSymbol } from '../../config/Image';
import All_Featured from './All-Featured';
import SearchBar from './SearchBar';

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
          uri: item.image[0],
        }}
        width={'100%'}
        height={'75%'}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('SingleProduct', {id: item._id})}
        style={{paddingHorizontal: responsiveWidth(2)}}>
        <Text
          style={{
            fontSize: responsiveFontSize(1.8),
            fontFamily: Medium,
            fontWeight: '700',
          }}>
          {item.name.substring(0, 30)}..
        </Text>
        {/* <Text
          style={{
            fontSize: responsiveFontSize(1.2),
            fontFamily: Regular,
            fontWeight: '700',
          }}>
          {item.description.substring(0, 40)}
        </Text> */}
        <Text>
          {item?.priceByVariant && item?.priceByVariant[0]?.price
            ? 'Click to see price'
            : `${takaSymbol}${item.price}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const TrendingProducts = () => {
  const [product, setproduct] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('https://myshop-2-production.up.railway.app/api/products?limit=50')
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
          keyExtractor={item => item._id}
        />
      )}
    </View>
  );
};

export default TrendingProducts;
