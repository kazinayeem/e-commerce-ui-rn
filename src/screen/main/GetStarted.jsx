/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {GetStartimage} from '../../config/Image';
import {useNavigation} from '@react-navigation/native';

const GetStarted = () => {
  const navination = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={GetStartimage}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.footer}>
          <Text
            style={{
              fontSize: 35,
              color: '#fff',
              width: '80%',
              alignSelf: 'center',
              textAlign: 'center',
              paddingHorizontal: 20,
              fontWeight: '900',
              fontFamily: 'Montserrat-ExtraBold',
            }}>
            You want Authentic, here you go!
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#fff',
              width: '80%',
              alignSelf: 'center',
              textAlign: 'center',
              paddingBottom: 60,
            }}>
            Find it here, buy it now!
          </Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navination.navigate('Tab')}>
            <Text style={styles.loginButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    opacity: 0.9,
    justifyContent: 'flex-end',
  },
  footer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  footerText: {
    color: '#8c8c8c',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#ff5a5f',
    paddingVertical: 15,
    borderRadius: 8,
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
