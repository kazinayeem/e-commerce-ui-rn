import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BlackColor, bordercolor, btncolor, graycolor } from '../../config/color';
import { ExtraBold } from '../../config/Font';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Forgot </Text>
        <Text style={styles.headerText}>Password ? </Text>
      </View>
      <View>
        <View style={styles.textInputContainer}>
          <Icon name="envelope-o" size={24} color="#626262" />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email address"
            placeholderTextColor={graycolor}
          />
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.RegisterText}>
          * We will send you a message to set or reset your new password
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  textContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 36,
    fontWeight: '900',
    fontFamily: ExtraBold,
  },

  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: bordercolor,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    height: 50,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: BlackColor,
  },
  RegisterText: {
    color: '#676767',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: btncolor,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: graycolor,
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: bordercolor,
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: graycolor,
    fontSize: 14,
  },
  signUpText: {
    textDecorationLine: 'underline',
    textDecorationColor: btncolor,
    color: btncolor,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
