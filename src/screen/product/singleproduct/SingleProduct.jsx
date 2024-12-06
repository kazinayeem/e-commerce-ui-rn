import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Carousel from 'react-native-reanimated-carousel';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {BuyBtn, GotoBtn} from '../../../config/Image';
import All_Featured from '../All-Featured';
import ProductShow from '../ProductShow';
import {Bold, Regular, SemiBold, Thin} from '../../../config/Font';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import BigButton from '../../../components/Button';

const width = Dimensions.get('window').width;

const SingleProduct = props => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${props.route.params.id}`)
      .then(res => setProduct(res.data))
      .catch(e => {
        console.log(e);
      });
  }, [props.route.params.id]);

  return (
    <View style={styles.container}>
      {!product ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#6666" />
          <ActivityIndicator size="large" color="#3434" />
          <ActivityIndicator size="large" color="#355" />
          <ActivityIndicator size="large" color="#3423" />
        </View>
      ) : (
        <ScrollView>
          <Carousel
            width={width}
            height={width / 1.5} // Updated to make the carousel a bit taller for better aspect ratio
            autoPlay={true}
            data={product.images}
            scrollAnimationDuration={2000}
            renderItem={({index}) => (
              <Image
                source={{uri: product.images[index]}}
                style={styles.carouselImage}
              />
            )}
          />

          <View style={styles.detailsContainer}>
            <Text style={styles.title}>Size : 7UK</Text>

            <View style={styles.sizebtnContainer}>
              {[6, 7, 8, 9, 10].map(size => (
                <TouchableOpacity
                  key={size}
                  style={[styles.sizebtn, size === 7 && styles.btnActiveColor]}>
                  <Text
                    style={[
                      styles.btnText,
                      size === 7 && styles.btnTextActive,
                    ]}>
                    {size}UK
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.title}>{product?.title}</Text>
            <Text style={{fontFamily: Regular}}>
              Vision Alta Men’s Shoes Size (All Colours)
            </Text>

            <View style={styles.starContainer}>
              <StarRatingDisplay
                rating={product.rating || 0} // Using actual rating from API
                maxStars={5}
                starSize={20}
                emptyColor="#A4A9B3"
                color="#EDB310"
              />
              <Text
                style={{color: '#A4A9B3', fontSize: 17, paddingHorizontal: 10}}>
                {product.rating?.count || 0}+ reviews
              </Text>
            </View>

            <View style={styles.priceContainer}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#808488',
                  textDecorationLine: 'line-through',
                  fontFamily: Thin,
                }}>
                ${product?.price + 200}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: Regular,
                }}>
                ${product?.price}
              </Text>
              <Text
                style={{
                  color: '#FA7189',
                  fontSize: 15,
                  fontFamily: Bold,
                }}>
                {Math.round(Math.random() * 50)}% Off
              </Text>
            </View>

            <Text style={styles.description}>Product Details</Text>
            <Text style={styles.description}>{product?.description}</Text>
          </View>
          <View style={styles.btnSection}>
            <BigButton w={40} h={6} icon={true} bg={'transparent'}>
              <Image source={BuyBtn} />
            </BigButton>

            <BigButton w={40} h={6} icon={true} bg={'transparent'}>
            <Image source={GotoBtn} />
            </BigButton>
          </View>



          <TouchableOpacity
            style={styles.deliveryInfo}
            accessibilityLabel="Delivery Info">
            <Text style={{textAlign: 'left', fontSize: 22}}>Delivery in </Text>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 25,
                fontFamily: Bold,
              }}>
              1 Hour
            </Text>
          </TouchableOpacity>

          <All_Featured title={'Similar To'} />
          <ProductShow star={true} />
        </ScrollView>
      )}
    </View>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: responsiveWidth(100),
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '95%',
    height: '100%',
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 10,
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: responsiveFontSize(1.6),
    color: '#666',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    columnGap: 10,
  },
  sizebtnContainer: {
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sizebtn: {
    borderColor: '#FA7189',
    width: responsiveWidth(12),
    height: responsiveHeight(4),
    borderWidth: responsiveWidth(0.3),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: '#FA7189',
    fontSize: responsiveFontSize(1.8),
    fontFamily: SemiBold,
  },
  btnTextActive: {
    color: '#fff',
  },
  btnActiveColor: {
    backgroundColor: '#FA7189',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  deliveryInfo: {
    backgroundColor: '#FFCCD5',
    width: '95%',
    alignSelf: 'center',
    paddingLeft: 20,
    borderRadius: 10,
    marginTop: 10,
  },
});
