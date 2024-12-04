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

const width = Dimensions.get('window').width;
const SingleProduct = props => {
  const [product, setproduct] = useState(null);
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${props.route.params.id}`)
      .then(res => setproduct(res.data))
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
            height={width / 2}
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

            <View style={styles.sizebtncotainer}>
              <TouchableOpacity style={styles.sizebtn}>
                <Text style={styles.btntext}>6UK</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.sizebtn, styles.btnactivecolor]}>
                <Text style={[styles.btntext, styles.btntextactive]}>7UK</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sizebtn}>
                <Text style={styles.btntext}>8UK</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sizebtn}>
                <Text style={styles.btntext}>9UK</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sizebtn}>
                <Text style={styles.btntext}>10UK</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>{product?.title}</Text>
            <Text style={{fontFamily: 'Montserrat-Regular'}}>
              Vision Alta Men’s Shoes Size (All Colours)
            </Text>

            <View style={styles.startcontainer}>
              <StarRatingDisplay
                rating={Math.round(Math.random() * 5)}
                maxStars={5}
                starSize={20}
                emptyColor="#A4A9B3"
                color="#EDB310"
              />
              <Text
                style={{color: '#A4A9B3', fontSize: 17, paddingHorizontal: 10}}>
                {Math.round(Math.random() * 50000)}+
              </Text>
            </View>

            <View style={styles.pricecontainer}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#808488',
                  textDecorationLine: 'line-through',
                  fontFamily: 'Montserrat-Thin',
                }}>
                ${product?.price + 200}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Montserrat-Regular',
                }}>
                ${product?.price}
              </Text>
              <Text
                style={{
                  color: '#FA7189',
                  fontSize: 15,
                  fontFamily: 'Montserrat-Bold',
                }}>
                {Math.round(Math.random() * 50)}% Off
              </Text>
            </View>
            <Text style={styles.description}>Product Details</Text>
            <Text style={styles.description}>{product?.description}</Text>
          </View>

          <View style={styles.btnsection}>
            <TouchableOpacity>
              <Image source={BuyBtn} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={GotoBtn} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#FFCCD5',
              width: '95%',
              alignSelf: 'center',
              paddingLeft: 20,
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Text style={{textAlign: 'left', fontSize: 22}}>Delivery in </Text>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 25,
                fontFamily: 'Montserrat-Bold',
              }}>
              1 within Hour
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
    width: '100%',
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  sizebtncotainer: {
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  sizebtn: {
    borderColor: '#FA7189',
    width: '50',
    height: '35',
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btntext: {
    textAlign: 'center',
    color: '#FA7189',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },

  btntextactive: {
    color: '#fff',
  },
  btnactivecolor: {
    backgroundColor: '#FA7189',
  },
  startcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pricecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    columnGap: 10,
  },

  btnsection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
