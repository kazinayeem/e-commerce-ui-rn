import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import Header from './Header';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import {Regular, SemiBold} from '../../config/Font';
import IconEntypo from 'react-native-vector-icons/Entypo';
import CartProduct from './CartProduct';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import BigButton from '../../components/Button';
const CheckOut = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: responsiveScreenWidth(100),
      }}>
      <Header title="CheckOut" navigation={navigation} />

      <View style={{paddingHorizontal: responsiveScreenWidth(2)}}>
        <View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '99%'}}>
            <Icon name="location" size={responsiveFontSize(2)} />
            <Text
              style={{fontSize: responsiveFontSize(2), fontFamily: SemiBold}}>
              Delivery Address
            </Text>
          </View>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginTop: 15,
              gap: 5,
            }}>
            <View
              style={{
                width: responsiveScreenWidth(78),
                borderColor: '#e0e0e0',
                shadowColor: '#000',
                backgroundColor: 'white',
                shadowRadius: 5,
                elevation: 1,
                padding: 10,
                borderRadius: 2,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.8),
                    fontFamily: SemiBold,
                  }}>
                  Address
                </Text>
                <Icon1 name="edit" size={responsiveFontSize(2)} />
              </View>
              <Text
                style={{
                  fontSize: responsiveFontSize(1.5),
                  fontFamily: Regular,
                }}>
                216 St Paul's Rd, London N1 2LL, UK Contact : +44-784232
              </Text>
            </View>
            <View
              style={{
                width: responsiveScreenWidth(18),
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#e0e0e0',
                backgroundColor: 'white',
                shadowRadius: 5,
                elevation: 1,
                padding: 10,
                borderRadius: 2,
              }}>
              <Icon1 name="plus" size={responsiveFontSize(3.5)} />
            </View>
          </View>

          {/* shopping list */}
          <Text
            style={{
              fontFamily: SemiBold,
              fontSize: responsiveScreenFontSize(2),
            }}>
            Shopping List
          </Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{flexDirection: 'column', marginBottom: 100}}>
            <CartProduct imagelink="https://img.drz.lazcdn.com/static/bd/p/a3fc771dec524a0e21a6c79e7f119772.jpg_960x960q80.jpg_.webp" />
            <CartProduct imagelink="https://artisanclick.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-17.18.18_0d9261ad.jpg" />
            <CartProduct imagelink="https://mensworld.com.bd/wp-content/uploads/2024/01/3205.jpg" />
            <CartProduct imagelink="https://mensworld.com.bd/wp-content/uploads/2024/01/3205.jpg" />
            <CartProduct imagelink="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/SearchAlt/224x336/578691.jpg" />
            <BigButton
              title={'CheckOut '}
              w={40}
              h={5}
              fs={2}
              mt={5}
              mb={5}
              position={'flex-end'}
              br={10}
              icon={true}
              actiontitle={'CheckOut2'}
              action={navigation.navigate}>
              <IconEntypo name="controller-next" />
            </BigButton>

            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#BBBBBB',
                marginTop: 500,
              }}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default CheckOut;
