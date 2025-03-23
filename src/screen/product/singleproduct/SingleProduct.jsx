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
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import BigButton from '../../../components/Button';
import { Bold, Regular, SemiBold, Thin } from '../../../config/Font';
import { BuyBtn, GotoBtn, takaSymbol } from '../../../config/Image';
import All_Featured from '../All-Featured';
import ProductShow from '../ProductShow';

const width = Dimensions.get('window').width;

const SingleProduct = props => {
  const [product, setProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState({
    name: '',
    value: '',
    price: 0,
    stock: 0,
    image: '',
    _id: '',
  });

  useEffect(() => {
    axios
      .get(
        `https://myshop-2-production.up.railway.app/api/products/${props.route.params.id}`,
      )
      .then(res => {
        setProduct(res.data);
        if (res.data.priceByVariant.length > 0 && res.data.priceByVariant[0]) {
          setSelectedProduct({
            name: res.data.priceByVariant[0].name,
            value: res.data.priceByVariant[0].value,
            price: res.data.priceByVariant[0].price,
            buyingPrice: res.data.priceByVariant[0].buyingPrice,
            stock: res.data.priceByVariant[0].stock,
            image: res.data.priceByVariant[0].image,
            _id: res.data.priceByVariant[0]._id,
          });
        }
      })
      .catch(e => console.log(e));
  }, [props.route.params.id]);
  return (
    <View style={styles.container}>
      {!product ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#6666" />
        </View>
      ) : (
        <ScrollView>
          {/* Image Carousel */}
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

          {/* Product Details */}
          <View style={styles.detailsContainer}>
            {' '}
            <Text style={styles.title}>{product?.name}</Text>
            {product?.priceByVariant?.length > 0 && (
              <Text style={styles.title}>Size/Variant</Text>
            )}
            {/* Variant Selection */}
            <View style={styles.sizebtnContainer}>
              {product?.priceByVariant?.map(v => (
                <TouchableOpacity
                  key={v._id}
                  style={[
                    styles.sizebtn,
                    selectedProduct._id === v._id && styles.btnActiveColor,
                  ]}
                  onPress={() => {
                    setSelectedProduct({
                      name: v.name,
                      value: v.value,
                      price: v.price,
                      buyingPrice: v.buyingPrice,
                      stock: v.stock,
                      image: v.image,
                      _id: v._id,
                    });
                  }}>
                  <Text
                    style={[
                      styles.btnText,
                      selectedProduct._id === v._id && styles.btnTextActive,
                    ]}>
                    {v.name} {v.value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* Product Name */}
            {/* Star Rating */}
            <View style={styles.starContainer}>
              <StarRatingDisplay
                rating={product.rating || 0}
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
            {/* Price Section */}
            <View style={styles.priceContainer}>
              <Text style={styles.strikeThrough}>
                {takaSymbol}{' '}
                {selectedProduct.name
                  ? selectedProduct.price + Math.round(Math.random() * 100)
                  : product.price + Math.round(Math.random() * 100)}
              </Text>

              <Text style={styles.priceText}>
                {takaSymbol}{' '}
                {selectedProduct.name ? selectedProduct.price : product.price}
              </Text>
              {product?.discount && (
                <Text style={styles.discountText}>
                  {product?.discount}% off
                </Text>
              )}
            </View>
            {/* Buttons */}
            <View style={styles.btnSection}>
              <BigButton w={40} h={6} icon={true} bg={'transparent'}>
                <Image source={BuyBtn} />
              </BigButton>

              <BigButton w={40} h={6} icon={true} bg={'transparent'}>
                <Image source={GotoBtn} />
              </BigButton>
            </View>
            {/* Product Description */}
            <Text style={styles.description}>Product Details</Text>
            <RenderHTML
              contentWidth={width}
              source={
                product?.description
                  ? {html: product.description}
                  : {html: '<p></p>'}
              }
            />
          </View>

          {/* Delivery Information */}
          <TouchableOpacity style={styles.deliveryInfo}>
            <Text style={{textAlign: 'left', fontSize: 22}}>Delivery in</Text>
            <Text style={{textAlign: 'left', fontSize: 25, fontFamily: Bold}}>
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
    columnGap: 10,
  },
  strikeThrough: {
    fontSize: 14,
    color: '#808488',
    textDecorationLine: 'line-through',
    fontFamily: Thin,
  },
  priceText: {
    fontSize: 15,
    fontFamily: Regular,
  },
  discountText: {
    fontSize: 15,
    fontFamily: Regular,
    color: '#FA7189',
  },
  sizebtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  sizebtn: {
    borderColor: '#FA7189',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  btnText: {
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
  btnSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  deliveryInfo: {
    backgroundColor: '#FFCCD5',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
