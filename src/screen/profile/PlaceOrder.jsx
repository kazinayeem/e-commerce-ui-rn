import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './Header';
import {useNavigation} from '@react-navigation/native';
import {Bold, ExtraBold, Medium, Regular} from '../../config/Font';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {BlackColor, whiteColor, nextbtncolor} from '../../config/color';
import {p1, p2, p3, p4} from '../../config/Image';
import BigButton from '../../components/Button';

const PlaceOrder = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);

  return (
    <View style={styles.container}>
      <Header
        title={'Checkout'}
        action={navigation.navigate}
        pageName={'CheckOut2'}
      />

      <View style={{padding: 20}}>
        <View style={styles.row}>
          <Text style={[styles.rowLabel, {color: BlackColor}]}>Order</Text>
          <Text style={styles.rowValue}>$34344</Text>
        </View>

        <View style={styles.row}>
          <Text style={[styles.rowLabel, {color: BlackColor}]}>Shipping</Text>
          <Text style={styles.rowValue}>$33</Text>
        </View>

        <View style={styles.row}>
          <Text
            style={[
              styles.rowLabel,
              {fontFamily: ExtraBold, color: BlackColor},
            ]}>
            Total
          </Text>
          <Text
            style={[
              styles.rowValue,
              {fontFamily: ExtraBold, color: BlackColor},
            ]}>
            $34344
          </Text>
        </View>
        <View style={styles.divider} />

        <Text style={{fontFamily: Bold}}>Payment</Text>
        <View
          style={{
            flexDirection: 'column',
            gap: 10,
            alignItems: 'center',
          }}>
          <Image
            width={responsiveWidth(100)}
            height={responsiveHeight(10)}
            source={p1}
          />

          <Image
            width={responsiveWidth(100)}
            height={responsiveHeight(10)}
            source={p2}
          />

          <Image
            width={responsiveWidth(100)}
            height={responsiveHeight(10)}
            source={p3}
          />

          <Image
            width={responsiveWidth(100)}
            height={responsiveHeight(10)}
            source={p4}
          />
        </View>

        <BigButton
          title={'Continue'}
          mt={10}
          action={handleOpenModal} // Open Modal on click
        />
      </View>

      {/* Modal Implementation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleCloseModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Order Confirmation</Text>
            <Text style={styles.modalText}>
              Are you sure you want to proceed with this order?
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, {backgroundColor: '#E0E0E0'}]}
                onPress={handleCloseModal}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, {backgroundColor: nextbtncolor}]}
                onPress={() => {
                  handleCloseModal();
                  Alert.alert('Thanks');
                }}>
                <Text style={[styles.modalButtonText, {color: 'white'}]}>
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PlaceOrder;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    backgroundColor: whiteColor,
    height: responsiveHeight(100),
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#BBBBBB',
    marginVertical: 15,
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
    color: '#A8A8A9',
  },
  rowValue: {
    fontFamily: Regular,
    color: '#A8A8A9',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: ExtraBold,
    fontSize: responsiveFontSize(2.5),
    marginBottom: 10,
  },
  modalText: {
    fontFamily: Regular,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    fontFamily: Bold,
    fontSize: responsiveFontSize(2),
  },
});
