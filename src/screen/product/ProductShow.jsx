import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {Light, Medium, Regular} from '../../config/Font';

const ProductShow = ({star}) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products?limit=20')
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
        setLoading(false);
      });
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image style={styles.productImage} source={{uri: item.image}} />
      <Text style={styles.productTitle}>{item.title.substring(0, 20)}</Text>
      <Text style={styles.productDescription}>
        {item.description.substring(0, 50)}...
      </Text>
      <Text style={styles.productPrice}>₹{item.price}</Text>

      <View style={styles.discountContainer}>
        <Text style={styles.strikeThroughPrice}>₹{item.price + 500}</Text>
        <Text style={styles.discountText}>
          {Math.round(Math.random() * 100)}% Off
        </Text>
      </View>

      {star && (
        <View style={styles.ratingContainer}>
          <StarRatingDisplay
            rating={item.rating.rate}
            maxStars={5}
            starSize={10}
            emptyColor="#A4A9B3"
            color="#EDB310"
          />
          <Text style={styles.ratingCount}>{item.rating.count}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6666" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={product}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductShow;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginStart: 15,
    width: '97%',
    alignSelf: 'center',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    width: 170,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 10,
    paddingStart: 5,
  },
  productImage: {
    borderRadius: 5,
    width: 170,
    height: 124,
  },
  productTitle: {
    fontSize: 12,
    fontFamily: Medium,
    alignSelf: 'flex-start',
  },
  productDescription: {
    fontSize: 10,
    fontFamily: Medium,
    alignSelf: 'flex-start',
  },
  productPrice: {
    fontSize: 12,
    fontFamily: Medium,
    alignSelf: 'flex-start',
  },
  discountContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  strikeThroughPrice: {
    fontSize: 12,
    fontFamily: Light,
    textDecorationLine: 'line-through',
    color: '#BBBBBB',
  },
  discountText: {
    fontSize: 10,
    fontFamily: Regular,
    color: '#FE735C',
    marginLeft: 5,
  },
  ratingContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingCount: {
    color: '#A4A9B3',
    fontSize: 10,
    marginLeft: 5,
  },
});
