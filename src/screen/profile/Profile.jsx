import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Bold, Regular, SemiBold} from '../../config/Font';
import {BlackColor, nextbtncolor, whiteColor} from '../../config/color';
import {useNavigation} from '@react-navigation/native';
import Header from './Header';
import {profile} from '../../config/Image';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import TextInputProfile from '../../components/TextInput';
import BigButton from '../../components/Button';
const Profile = () => {
  const navigation = useNavigation();
  const user = [
    {title: 'Email Address', placeholder: 'abc@gmail.com'},
    {title: 'Password', placeholder: '*****', password: true},
  ];
  const address = [
    {title: 'Pincode', placeholder: '12121'},
    {title: 'Address', placeholder: '123 Dhaka Mirpur'},
    {title: 'City', placeholder: 'Mirpur'},
    {title: 'State', placeholder: '12L'},
    {title: 'Country', placeholder: 'BD'},
  ];

  const bankdetails = [
    {title: 'Bank Account Number', placeholder: '205032323'},
    {title: 'Accounts Holder Number', placeholder: 'MOHAMMAD ALI NAYEEM'},
    {title: 'SWIFT code', placeholder: 'SB32323'},
  ];
  return (
    <View style={styles.container}>
      <Header navigation={navigation} title="Profile" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Image
          source={profile}
          width={responsiveWidth(25)}
          height={responsiveHeight(25)}
          resizeMode="cover"
          style={{alignSelf: 'center'}}
        />

        <View style={{flexDirection: 'column', gap: 15}}>
          <Text style={{fontSize: 18, fontFamily: SemiBold}}>
            Personal Details
          </Text>
          {user.map(u => (
            <TextInputProfile
              key={u.placeholder}
              placeholdercolor={BlackColor}
              placeholder={u.placeholder}
              title={u.title}
              password={u.password || false}
            />
          ))}
          <TouchableOpacity>
            <Text style={{color: nextbtncolor, textAlign: 'right'}}>
              Change Password
            </Text>
          </TouchableOpacity>
        </View>

        {/* Business Address Details */}

        <View style={{flexDirection: 'column', gap: 15}}>
          <Text style={{fontSize: 18, fontFamily: SemiBold, marginBottom: 20}}>
            Business Address Details
          </Text>

          {address.map(d => (
            <TextInputProfile
              key={d.title}
              placeholdercolor={BlackColor}
              placeholder={d.placeholder}
              title={d.title}
            />
          ))}
        </View>

        {/* Bank Account Details */}

        <View style={{flexDirection: 'column', gap: 15}}>
          <Text style={{fontSize: 18, fontFamily: SemiBold}}>
            Bank Address Details
          </Text>
          {bankdetails.map(d => (
            <TextInputProfile
              key={d.title}
              placeholdercolor={BlackColor}
              placeholder={d.placeholder}
              title={d.title}
            />
          ))}
        </View>

        <BigButton
          textcolor={'white'}
          title={' Save'}
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
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
});
