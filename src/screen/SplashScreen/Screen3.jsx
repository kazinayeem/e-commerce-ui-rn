import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Image2} from '../../config/Image';
import {
  BlackColor,
  bordercolor,
  nextbtncolor,
  titlecolor,
} from '../../config/color';
import {ExtraBold, SemiBold} from '../../config/Font';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Screen2 = () => {
  const navigation = useNavigation();
  const totalSteps = 3;
  const currentStep = 3;

  const renderDots = () => {
    return Array.from({length: totalSteps}).map((_, index) => (
      <View
        key={index}
        style={[styles.dot, index === currentStep - 1 && styles.activeDot]}
      />
    ));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{`${currentStep}/${totalSteps}`}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.headerText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Image and Content */}
      <View style={styles.imageContainer}>
        <Image source={Image2} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Get Your Order</Text>
        <Text style={styles.subtitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
          <Text style={styles.prevText}>Prev</Text>
        </TouchableOpacity>
        <View style={styles.dotContainer}>{renderDots()}</View>
        <TouchableOpacity onPress={() => navigation.navigate('GetStarted')}>
          <Text style={styles.nextText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: responsiveFontSize(2),
    fontFamily: SemiBold,
  },
  imageContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: responsiveWidth(70),
    height: responsiveHeight(60),
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: responsiveFontSize(3.5),
    fontFamily: ExtraBold,
  },
  subtitle: {
    textAlign: 'center',
    padding: 10,
    color: titlecolor,
    fontSize: responsiveFontSize(2),
    fontFamily: SemiBold,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  prevText: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: SemiBold,
    color: bordercolor,
  },
  dotContainer: {
    flexDirection: 'row',
  },
  dot: {
    width: responsiveWidth(2),
    height: responsiveHeight(1),
    borderRadius: 5,
    backgroundColor: bordercolor,
    marginHorizontal: 6,
  },
  activeDot: {
    width: responsiveWidth(15),
    backgroundColor: BlackColor,
  },
  nextText: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: SemiBold,
    color: nextbtncolor,
  },
});

export default Screen2;
