import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Medium, SemiBold} from '../../config/Font';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {navigationActiveColor, titlecolor} from '../../config/color';
import {loadingImage} from '../../config/Image';

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
          width={160}
          height={150}
          resizeMode="cover"
          source={{uri: imagelink}}
        />

        <View
          style={{
            flexDirection: 'column',
            padding: 10,
          }}>
          <Text style={{fontFamily: SemiBold, fontSize: 14}}>Men’s Jacket</Text>
          <Text>Variations : Black || Red</Text>

          {/* start part */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 12, fontFamily: Medium}}>
              {Math.round(Math.random() * 5)}
            </Text>
            <StarRatingDisplay
              rating={Math.round(Math.random() * 5)}
              maxStars={5}
              starSize={15}
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
            }}>
            <TouchableOpacity
              style={{
                width: 60,
                height: 35,
                borderRadius: 5,
                borderColor: 'black',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 10,
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
                  fontSize: 8,
                  color: navigationActiveColor,
                }}>
                upto 33% off
              </Text>
              <Text
                style={{
                  textDecorationStyle: 'dashed',
                  color: titlecolor,
                  fontSize: 12,
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
