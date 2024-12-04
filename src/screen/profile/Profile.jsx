import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Bold, Regular, SemiBold} from '../../config/Font';
import {BlackColor, nextbtncolor, whiteColor} from '../../config/color';
import {useNavigation} from '@react-navigation/native';
import Header from './Header';
const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header navigation={navigation} title="Profile" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Text style={{fontSize: 18, fontFamily: SemiBold, marginBottom: 20}}>
          Personal Details
        </Text>
        <View style={{flexDirection: 'column', gap: 15}}>
          <View style={{flexDirection: 'column', gap: 3}}>
            <Text style={{fontSize: 12, fontFamily: Regular}}>
              Email Address
            </Text>
            <TextInput
              placeholder="abc@gmail.com"
              placeholderTextColor={BlackColor}
              style={{
                width: '100%',
                height: 48,
                borderColor: '#C8C8C8',
                borderRadius: 5,
                borderWidth: 1,
              }}
            />
          </View>

          <View style={{flexDirection: 'column', gap: 3}}>
            <Text style={{fontSize: 12, fontFamily: Regular}}>
              Email Address
            </Text>
            <TextInput
              placeholder="*****"
              placeholderTextColor={BlackColor}
              secureTextEntry
              style={{
                width: '100%',
                height: 48,
                borderColor: '#C8C8C8',
                borderRadius: 5,
                borderWidth: 1,
              }}
            />

            <TouchableOpacity>
              <Text style={{color: nextbtncolor, textAlign: 'right'}}>
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Business Address Details */}
        <Text style={{fontSize: 18, fontFamily: SemiBold, marginBottom: 20}}>
          Business Address Details
        </Text>
        <View style={{flexDirection: 'column', gap: 15}}>
          <View style={{flexDirection: 'column', gap: 3}}>
            <Text style={{fontSize: 12, fontFamily: Regular}}>Pincode</Text>
            <TextInput
              placeholder="232323"
              placeholderTextColor={BlackColor}
              style={{
                width: '100%',
                height: 48,
                borderColor: '#C8C8C8',
                borderRadius: 5,
                borderWidth: 1,
              }}
            />
          </View>
          <View style={{flexDirection: 'column', gap: 3}}>
            <Text style={{fontSize: 12, fontFamily: Regular}}>Address</Text>
            <TextInput
              placeholder="216 Dhaka Mirpur"
              placeholderTextColor={BlackColor}
              style={{
                width: '100%',
                height: 48,
                borderColor: '#C8C8C8',
                borderRadius: 5,
                borderWidth: 1,
              }}
            />
          </View>

          <View style={{flexDirection: 'column', gap: 3}}>
            <Text style={{fontSize: 12, fontFamily: Regular}}>City</Text>
            <TextInput
              placeholder="Mirpur"
              placeholderTextColor={BlackColor}
              style={{
                width: '100%',
                height: 48,
                borderColor: '#C8C8C8',
                borderRadius: 5,
                borderWidth: 1,
              }}
            />
          </View>
          <View style={{flexDirection: 'column', gap: 3}}>
            <Text style={{fontSize: 12, fontFamily: Regular}}>State</Text>
            <TextInput
              placeholder="N1 2LL"
              placeholderTextColor={BlackColor}
              style={{
                width: '100%',
                height: 48,
                borderColor: '#C8C8C8',
                borderRadius: 5,
                borderWidth: 1,
              }}
            />
          </View>

          <View style={{flexDirection: 'column', gap: 3}}>
            <Text style={{fontSize: 12, fontFamily: Regular}}>Country</Text>
            <TextInput
              placeholder="UK"
              placeholderTextColor={BlackColor}
              style={{
                width: '100%',
                height: 48,
                borderColor: '#C8C8C8',
                borderRadius: 5,
                borderWidth: 1,
              }}
            />
          </View>
        </View>

        {/* Bank Account Details */}

        <Text style={{fontSize: 18, fontFamily: SemiBold, marginBottom: 20}}>
          Business Address Details
        </Text>
        <View style={{flexDirection: 'column', gap: 15}}>
          <View style={{flexDirection: 'column', gap: 3}}>
            <Text style={{fontSize: 12, fontFamily: Regular}}>
              Bank Account Number
            </Text>
            <TextInput
              placeholder="205034223"
              placeholderTextColor={BlackColor}
              style={{
                width: '100%',
                height: 48,
                borderColor: '#C8C8C8',
                borderRadius: 5,
                borderWidth: 1,
              }}
            />
          </View>
          <View style={{flexDirection: 'column', gap: 3}}>
            <Text style={{fontSize: 12, fontFamily: Regular}}>
              Account Holder’s Name
            </Text>
            <TextInput
              placeholder="Mohammad ali nayeem"
              placeholderTextColor={BlackColor}
              style={{
                width: '100%',
                height: 48,
                borderColor: '#C8C8C8',
                borderRadius: 5,
                borderWidth: 1,
              }}
            />
          </View>

          <View style={{flexDirection: 'column', gap: 3}}>
            <Text style={{fontSize: 12, fontFamily: Regular}}>IFSC Code</Text>
            <TextInput
              placeholder="SBIN00428"
              placeholderTextColor={BlackColor}
              style={{
                width: '100%',
                height: 48,
                borderColor: '#C8C8C8',
                borderRadius: 5,
                borderWidth: 1,
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: '100%',
            height: 52,
            backgroundColor: nextbtncolor,
            borderRadius: 5,
            marginBottom: 50,
            marginTop: 20,

            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: SemiBold,
              fontSize: 16,
              color: whiteColor,
            }}>
            Save
          </Text>
        </TouchableOpacity>
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
