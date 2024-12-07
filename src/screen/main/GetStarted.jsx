import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {GetStartimage} from '../../config/Image';
import {useNavigation} from '@react-navigation/native';
import {btncolor} from '../../config/color';
import {ExtraBold} from '../../config/Font';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import BigButton from '../../components/Button';

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={GetStartimage}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.footer}>
          <Text style={styles.titleText}>You want Authentic, here you go!</Text>
          <Text style={styles.subtitleText}>Find it here, buy it now!</Text>

          <BigButton
            title={'Get Started'}
            action={navigation.navigate}
            actiontitle={'MyDrawer'}
            mb={5}
            mt={3}
            h={6.5}
            br={40}
            w={90}
            fs={3.5}
          />
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
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  image: {
    width: responsiveWidth(100),
    justifyContent: 'flex-end',
    height: responsiveHeight(100),
  },
  footer: {
    paddingHorizontal: responsiveWidth(2),
    paddingBottom: responsiveHeight(8),
    alignItems: 'center',
  },
  titleText: {
    fontSize: responsiveFontSize(5),
    color: '#fff',
    textAlign: 'center',
    fontFamily: ExtraBold,
    fontWeight: '900',
    marginBottom: responsiveWidth(2.2),
  },
  subtitleText: {
    fontSize: responsiveFontSize(2),
    color: '#fff',
    textAlign: 'center',
    marginBottom: responsiveWidth(5),
  },
  loginButton: {
    backgroundColor: btncolor,
    paddingVertical: responsiveHeight(2.8),
    borderRadius: 8,
    width: responsiveWidth(85),
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
});
