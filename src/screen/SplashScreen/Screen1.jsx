import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Image1} from '../../config/Image';
import {
  BlackColor,
  bordercolor,
  nextbtncolor,
  titlecolor,
} from '../../config/color';
import {ExtraBold, SemiBold} from '../../config/Font';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Screen1 = () => {
  const navigation = useNavigation();
  const totalSteps = 3;
  const currentStep = 1;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{`${currentStep}/${totalSteps}`}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.headerText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Image and Text */}
      <View style={styles.imageContainer}>
        <Image source={Image1} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Choose Products</Text>
        <Text style={styles.subtitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View />
        <View style={styles.dotContainer}>
          {Array.from({length: totalSteps}).map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentStep - 1 && styles.activeDot,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('Home2')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    height : responsiveHeight(100),
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
    backgroundColor: BlackColor,
    width: responsiveWidth(15),
  },
  nextButton: {
    padding: 10,
  },
  nextButtonText: {
    fontSize: responsiveFontSize(2.5),
    color: nextbtncolor,
    fontFamily: SemiBold,
  },
});

export default Screen1;
