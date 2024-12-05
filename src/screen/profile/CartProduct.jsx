import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
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
  return (
    <View
      style={{
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'white',
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          loadingIndicatorSource={loadingImage}
          alt="Not found"
          style={{borderRadius: 20}}
          width={responsiveWidth(40)}
          height={responsiveHeight(20)}
          resizeMode="cover"
          source={{uri: imagelink}}
        />

        <View
          style={{
            flexDirection: 'column',
            padding: 10,
          }}>
          <Text style={{fontFamily: SemiBold, fontSize: responsiveFontSize(2)}}>
            Men’s Jacket
          </Text>
          <Text>Variations : Black || Red</Text>

          {/* start part */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{fontSize: responsiveFontSize(1.2), fontFamily: Medium}}>
              {Math.round(Math.random() * 5)}
            </Text>
            <StarRatingDisplay
              rating={Math.round(Math.random() * 5)}
              maxStars={5}
              starSize={responsiveFontSize(1.9)}
              emptyColor="#A4A9B3"
              color="#EDB310"
            />
          </View>

          {/* price section */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: responsiveWidth(3),
            }}>
            <TouchableOpacity
              style={{
                width: responsiveWidth(15),
                height: responsiveHeight(2.8),
                borderRadius: 5,
                borderColor: 'black',
                borderWidth: responsiveWidth(0.2),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(1.5),
                  fontFamily: SemiBold,
                  textAlign: 'center',
                }}>
                $34.00
              </Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontFamily: Medium,
                  fontSize: responsiveFontSize(1),
                  color: navigationActiveColor,
                }}>
                upto 33% off
              </Text>
              <Text
                style={{
                  textDecorationStyle: 'dashed',
                  color: titlecolor,
                  fontSize: responsiveFontSize(1.2),
                  fontFamily: Medium,
                }}>
                $64.00
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#BBBBBB',
          marginTop: 10,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          marginTop: 10,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontFamily: Medium, fontSize: 12}}>
          Total Order (1) :{' '}
        </Text>

        <Text style={{fontFamily: SemiBold, fontSize: 12}}>$34.00</Text>
      </View>
    </View>
  );
}
