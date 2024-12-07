import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/Ionicons';
import Header from './Header';
import BigButton from '../../components/Button';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {loadingImage} from '../../config/Image';
import {Bold, ExtraBold, Medium, Regular, SemiBold} from '../../config/Font';
import {nextbtncolor} from '../../config/color';

const CheckOut2 = () => {
  const navigation = useNavigation();
  const imageLink =
    'https://artisanclick.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-17.18.18_0d9261ad.jpg';

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        title="CheckOut"
        navigation={navigation}
        pageName="CheckOut"
        action={navigation.navigate}
        icon2
      />

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Product Card */}
        <View style={styles.cardContainer}>
          <Image
            source={{uri: imageLink}}
            loadingIndicatorSource={loadingImage}
            style={styles.productImage}
            resizeMode="cover"
          />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Men’s Jacket</Text>
            <Text style={styles.productSubtitle}>
              Checked Single-Breasted Blazer
            </Text>
            <View style={styles.buttonRow}>
              <BigButton
                title="Size - 42"
                w={20}
                fs={1.5}
                h={3.2}
                bg="#F2F2F2"
                textcolor="black"
              />
              <BigButton
                title="Qty - 1"
                w={20}
                fs={1.5}
                h={3.2}
                bg="#F2F2F2"
                textcolor="black"
              />
            </View>
            <View style={styles.deliveryInfo}>
              <Text style={styles.deliveryLabel}>Delivery by -</Text>
              <Text style={styles.deliveryDate}>10 May 2XXX</Text>
            </View>
          </View>
        </View>

        {/* Coupon Section */}
        <View style={styles.couponRow}>
          <Text style={styles.couponText}>
            <AntDesign
              name="ticket-sharp"
              size={responsiveFontSize(2.5)}
              color="black"
            />
            Apply Coupons
          </Text>
          <Text style={styles.selectText}>Select</Text>
        </View>
        <View style={styles.divider} />

        {/* Order Payment Details */}
        <Text style={styles.sectionTitle}>Order Payment Details</Text>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Order Amount</Text>
          <Text style={styles.rowValue}>$34343</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>
            Convenience <Text style={styles.linkText}>Know More</Text>
          </Text>
          <Text style={styles.linkText}>Apply Coupon</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Delivery Fee</Text>
          <Text style={styles.freeText}>Free</Text>
        </View>
        <View style={styles.dividerLarge} />

        <View style={styles.row}>
          <Text style={styles.totalLabel}>Order Total</Text>
          <Text style={styles.totalValue}>$43434</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.emiText}>
            EMI Available <Text style={styles.linkText}>Details</Text>
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerInfo}>
          <Text style={styles.footerTotal}>$343</Text>
          <Text style={styles.footerDetails}>View Details</Text>
        </View>
        <BigButton
          title="Proceed To Payment"
          w={45}
          fs={1.5}
          br={10}
          mb={6}
          position="flex-end"
          actiontitle={'PlaceOrder'}
          action={navigation.navigate}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    marginTop: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: 'white',
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: responsiveHeight(2),
  },
  productImage: {
    width: '40%',
    height: '100%',
    borderRadius: 10,
  },
  productInfo: {
    width: '60%',
    padding: 20,
  },
  productTitle: {
    fontFamily: SemiBold,
    fontSize: responsiveFontSize(3),
  },
  productSubtitle: {
    fontFamily: Regular,
    fontSize: responsiveFontSize(2),
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  deliveryInfo: {
    flexDirection: 'row',
    marginTop: 10,
  },
  deliveryLabel: {
    fontFamily: Regular,
    fontSize: responsiveFontSize(1.6),
  },
  deliveryDate: {
    fontFamily: SemiBold,
    fontSize: responsiveFontSize(1.8),
  },
  couponRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  couponText: {
    fontFamily: Bold,
    fontSize: responsiveFontSize(2),
  },
  selectText: {
    color: nextbtncolor,
    fontFamily: ExtraBold,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#BBBBBB',
    marginVertical: 10,
  },
  sectionTitle: {
    fontFamily: Medium,
    fontSize: responsiveFontSize(2.3),
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(1),
  },
  rowLabel: {
    fontFamily: Regular,
  },
  rowValue: {
    fontFamily: Bold,
  },
  linkText: {
    color: nextbtncolor,
    fontFamily: Bold,
  },
  freeText: {
    fontFamily: Bold,
    color: nextbtncolor,
  },
  dividerLarge: {
    width: '100%',
    height: 1,
    backgroundColor: '#BBBBBB',
    marginVertical: 20,
  },
  totalLabel: {
    fontFamily: SemiBold,
  },
  totalValue: {
    fontFamily: ExtraBold,
  },
  emiText: {
    fontFamily: Bold,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 10,
    height: responsiveHeight(15),
  },
  footerInfo: {
    flexDirection: 'column',
  },
  footerTotal: {
    fontFamily: SemiBold,
    fontSize: responsiveFontSize(3),
  },
  footerDetails: {
    fontFamily: SemiBold,
    fontSize: responsiveFontSize(1.8),
    color: nextbtncolor,
  },
});

export default CheckOut2;
