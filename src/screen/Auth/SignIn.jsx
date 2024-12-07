import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {bordercolor, btncolor, graycolor} from '../../config/color';
import {ExtraBold} from '../../config/Font';
import BigButton from '../../components/Button';
const SignIn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Welcome </Text>
        <Text style={styles.headerText}>Back! </Text>
      </View>
      <View>
        <View style={styles.textInputContainer}>
          <Icon name="user" size={24} color="#626262" />
          <TextInput
            style={styles.textInput}
            placeholder="Username or Email"
            placeholderTextColor={graycolor}
          />
        </View>

        <View style={styles.textInputContainer}>
          <Icon name="lock" size={24} color="#626262" />
          <TextInput
            placeholder="Password"
            placeholderTextColor={graycolor}
            secureTextEntry
            style={styles.textInput}
          />
          <Icon name="eye" size={20} color="#626262" />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <BigButton
        textcolor={'white'}
        title={'Login'}
        w={90}
        h={6}
        fs={2.5}
        mt={5}
        mb={5}
      />

      <Text style={styles.orText}>- OR Continue with -</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
      </View>

      {/* Create Account */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Create An Account</Text>
        <TouchableOpacity>
          <Text
            style={styles.signUpText}
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

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
    color: '#000',
  },
  forgotPasswordText: {
    color: btncolor,
    fontSize: 14,
    alignSelf: 'flex-end',
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
