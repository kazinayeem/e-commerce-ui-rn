import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
const Item = ({item, star}) => (
  <TouchableOpacity
    style={{
      alignItems: 'center',
      width: 170,
      flexDirection: 'column',
      backgroundColor: 'white',
      borderRadius: 5,
      marginHorizontal: 10,
      justifyContent: 'flex-start',
      paddingStart: 5,
    }}>
    <Image
      style={{borderRadius: 5}}
      source={{uri: item.image}}
      width={170}
      height={124}
    />
    <Text
      style={{
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',

        alignSelf: 'flex-start',
      }}>
      {item.title.substring(0, 20)}
    </Text>
    <Text
      style={{
        fontSize: 10,
        fontFamily: 'Montserrat-Medium',

        alignSelf: 'flex-start',
      }}>
      {item.description.substring(0, 50)}......
    </Text>
    <Text
      style={{
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',

        alignSelf: 'flex-start',
      }}>
      ₹{item.price}
    </Text>

    <View
      style={{
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 12,
          fontFamily: 'Montserrat-Light',
          textDecorationLine: 'line-through',
          alignSelf: 'flex-start',
          color: '#BBBBBB',
        }}>
        ₹{item.price + 500}
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontFamily: 'Montserrat-Regular',
          color: '#FE735C',
        }}>
        {Math.round(Math.random() * 100)} %Off
      </Text>
    </View>
    {star && (
      <View
        style={{
          alignSelf: 'flex-start',
          flexDirection: 'row',
        }}>
        <StarRatingDisplay
          rating={item.rating.rate}
          maxStars={5}
          starSize={10}
          emptyColor="#A4A9B3"
          color="#EDB310"
        />
        <Text style={{color: '#A4A9B3', fontSize: 10}}>
          {item.rating.count}
        </Text>
      </View>
    )}
  </TouchableOpacity>
);
const ProductShow = ({star}) => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products?limit=20')
      .then(res => setproduct(res.data))
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <View
      style={{
        marginTop: 15,
        marginStart: 15,

        width: '97%',
        alignSelf: 'center',
      }}>
      {product.length === 0 ? (
        <>
          <ActivityIndicator size="large" color="#6666" />
          <ActivityIndicator size="large" color="#3434" />
          <ActivityIndicator size="large" color="#355" />
          <ActivityIndicator size="large" color="#3423" />
        </>
      ) : (
        <>
          <FlatList
            horizontal
            data={product}
            renderItem={({item}) => <Item item={item} star={star} />}
            keyExtractor={item => item.id}
          />
        </>
      )}
    </View>
  );
};

export default ProductShow;
