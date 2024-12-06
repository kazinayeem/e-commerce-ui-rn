import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Medium, SemiBold} from '../../config/Font';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {navigationActiveColor, titlecolor} from '../../config/color';
import {loadingImage} from '../../config/Image';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default function CartProduct({imagelink}) {
  const randomRating = Math.round(Math.random() * 5);

  return (
    <View style={styles.container}>
      {/* Product Info Section */}
      <View style={styles.productRow}>
        {/* Product Image */}
        <Image
          loadingIndicatorSource={loadingImage}
          alt="Not found"
          style={styles.productImage}
          resizeMode="cover"
          source={{uri: imagelink}}
        />

        {/* Product Details */}
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Men’s Jacket</Text>
          <Text style={styles.variationText}>Variations: Black || Red</Text>

          {/* Star Rating */}
          <View style={styles.ratingRow}>
            <Text style={styles.ratingText}>{randomRating}</Text>
            <StarRatingDisplay
              rating={randomRating}
              maxStars={5}
              starSize={responsiveFontSize(1.9)}
              emptyColor="#A4A9B3"
              color="#EDB310"
            />
          </View>

          {/* Price Section */}
          <View style={styles.priceSection}>
            <TouchableOpacity style={styles.priceBox}>
              <Text style={styles.priceText}>$34.00</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.discountText}>Up to 33% off</Text>
              <Text style={styles.originalPrice}>$64.00</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Separator Line */}
      <View style={styles.separator} />

      {/* Order Total Section */}
      <View style={styles.orderTotalRow}>
        <Text style={styles.orderText}>Total Order (1): </Text>
        <Text style={styles.orderAmount}>$34.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  productRow: {
    flexDirection: 'row',
  },
  productImage: {
    borderRadius: 20,
    width: responsiveWidth(40),
    height: responsiveHeight(20),
  },
  productDetails: {
    flexDirection: 'column',
    padding: 10,
  },
  productTitle: {
    fontFamily: SemiBold,
    fontSize: responsiveFontSize(2),
  },
  variationText: {
    fontSize: responsiveFontSize(1.6),
    color: '#555',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
  },
  ratingText: {
    fontSize: responsiveFontSize(1.2),
    fontFamily: Medium,
    marginRight: 5,
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: responsiveHeight(1.5),
    gap: responsiveWidth(3),
  },
  priceBox: {
    width: responsiveWidth(15),
    height: responsiveHeight(2.8),
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: responsiveWidth(0.2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceText: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: SemiBold,
    textAlign: 'center',
  },
  discountText: {
    fontFamily: Medium,
    fontSize: responsiveFontSize(1),
    color: navigationActiveColor,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'dashed',
    color: titlecolor,
    fontSize: responsiveFontSize(1.2),
    fontFamily: Medium,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#BBBBBB',
    marginTop: 10,
  },
  orderTotalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  orderText: {
    fontFamily: Medium,
    fontSize: 12,
  },
  orderAmount: {
    fontFamily: SemiBold,
    fontSize: 12,
  },
});
