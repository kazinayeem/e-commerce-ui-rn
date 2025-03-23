import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
import Carousel from 'react-native-reanimated-carousel';
import RenderHTML from 'react-native-render-html';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import BigButton from '../../../components/Button';
import { Bold, Regular, SemiBold, Thin } from '../../../config/Font';
import { BuyBtn, GotoBtn } from '../../../config/Image';
import All_Featured from '../All-Featured';
import ProductShow from '../ProductShow';

const width = Dimensions.get('window').width;

const SingleProduct = props => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://myshop-2-production.up.railway.app/api/products/${props.route.params.id}`,
      )
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
            height={width / 1.5}
            autoPlay={true}
            data={product.image}
            scrollAnimationDuration={2000}
            renderItem={({index}) => (
              <Image
                source={{uri: product.image[index]}}
                style={styles.carouselImage}
              />
            )}
          />

          <View style={styles.detailsContainer}>
            {product?.priceByVariant?.length && (
              <Text style={styles.title}>Size/Varient</Text>
            )}

            <View style={styles.sizebtnContainer}>
              {product?.priceByVariant?.map(v => (
                <TouchableOpacity key={v._id} style={styles.sizebtn}>
                  <Text
                    style={[styles.btnText, v === 7 && styles.btnTextActive]}>
                    {v.name} {v.value}
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
                ${product?.price}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: Regular,
                }}>
                ${product?.discountedPrice}
              </Text>
              {product?.discount && (
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: Regular,
                    color: '#FA7189',
                  }}>
                  {product?.discount}% off
                </Text>
              )}
            </View>

            <View style={styles.btnSection}>
              <BigButton w={40} h={6} icon={true} bg={'transparent'}>
                <Image source={BuyBtn} />
              </BigButton>

              <BigButton w={40} h={6} icon={true} bg={'transparent'}>
                <Image source={GotoBtn} />
              </BigButton>
            </View>

            <Text style={styles.description}>Product Details</Text>
            {/* <Text style={styles.description}></Text> */}
            <RenderHTML
              contentWidth={width}
              source={
                product?.description
                  ? {html: product.description}
                  : {html: '<p></p>'}
              }
            />
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
    justifyContent: 'space-evenly',
  },
  sizebtn: {
    borderColor: '#FA7189',
    width: responsiveWidth(20),
    height: responsiveHeight(4),
    borderWidth: responsiveWidth(0.3),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: '#FA7189',
    fontSize: responsiveFontSize(1.2),
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
