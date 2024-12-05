import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {GetStartimage} from '../../config/Image';
import {useNavigation} from '@react-navigation/native';
import {btncolor, graycolor} from '../../config/color';
import {ExtraBold} from '../../config/Font';

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={GetStartimage} resizeMode="cover" style={styles.image}>
        <View style={styles.footer}>
          <Text style={styles.titleText}>You want Authentic, here you go!</Text>
          <Text style={styles.subtitleText}>Find it here, buy it now!</Text>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('MyDrawer')}>
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
    justifyContent: 'flex-end',
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 60,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
    fontFamily: ExtraBold,
    fontWeight: '900',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: btncolor,
    paddingVertical: 15,
    borderRadius: 8,
    width: '85%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
