import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from './Header';
import {profile} from '../../config/Image';
import {SemiBold} from '../../config/Font';
import {BlackColor, nextbtncolor} from '../../config/color';
import TextInputProfile from '../../components/TextInput';
import BigButton from '../../components/Button';

const Profile = () => {
  const navigation = useNavigation();

  // Data Arrays
  const personalDetails = [
    {title: 'Email Address', placeholder: 'abc@gmail.com'},
    {title: 'Password', placeholder: '*****', password: true},
  ];

  const addressDetails = [
    {title: 'Pincode', placeholder: '12121'},
    {title: 'Address', placeholder: '123 Dhaka Mirpur'},
    {title: 'City', placeholder: 'Mirpur'},
    {title: 'State', placeholder: '12L'},
    {title: 'Country', placeholder: 'BD'},
  ];

  const bankDetails = [
    {title: 'Bank Account Number', placeholder: '205032323'},
    {title: 'Accounts Holder Number', placeholder: 'MOHAMMAD ALI NAYEEM'},
    {title: 'SWIFT code', placeholder: 'SB32323'},
  ];

  return (
    <View style={styles.container}>
      <Header navigation={navigation} title="Profile" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {/* Profile Image */}
        <Image
          source={profile}
          style={styles.profileImage}
          resizeMode="cover"
        />

        {/* Personal Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          {personalDetails.map(item => (
            <TextInputProfile
              key={item.title}
              placeholder={item.placeholder}
              placeholdercolor={BlackColor}
              title={item.title}
              password={item.password || false}
            />
          ))}
          <TouchableOpacity>
            <Text style={styles.changePasswordText}>Change Password</Text>
          </TouchableOpacity>
        </View>

        {/* Business Address Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Business Address Details</Text>
          {addressDetails.map(item => (
            <TextInputProfile
              key={item.title}
              placeholder={item.placeholder}
              placeholdercolor={BlackColor}
              title={item.title}
            />
          ))}
        </View>

        {/* Bank Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bank Account Details</Text>
          {bankDetails.map(item => (
            <TextInputProfile
              key={item.title}
              placeholder={item.placeholder}
              placeholdercolor={BlackColor}
              title={item.title}
            />
          ))}
        </View>

        {/* Save Button */}
        <BigButton
          textcolor="white"
          title="Save"
          w={95}
          h={6}
          fs={2.5}
          mt={10}
          mb={5}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  profileImage: {
    alignSelf: 'center',
    width: '150',
    height: '150',
    borderRadius: 1, // Makes the image circular
  },
  section: {
    flexDirection: 'column',
    gap: 15,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: SemiBold,
    marginBottom: 10,
  },
  changePasswordText: {
    color: nextbtncolor,
    textAlign: 'right',
    marginTop: 5,
  },
});
