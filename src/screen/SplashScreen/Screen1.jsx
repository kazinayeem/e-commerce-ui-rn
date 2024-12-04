/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image1} from '../../config/Image';
import {useNavigation} from '@react-navigation/native';
import { BlackColor, bordercolor, nextbtncolor, titlecolor } from '../../config/color';
import { ExtraBold, SemiBold } from '../../config/Font';

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.HeaderText}>1/3</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.HeaderText} >Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={Image1}
          width={300}
          height={400}
          resizeMode="contain"
          style={{marginBottom: 20}}
        />

        <Text style={styles.title}>Choose Products</Text>

        <Text style={styles.subtitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </View>

      <View style={styles.footer}>
        <View />
        <View style={styles.dotdotContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={[styles.dot]} />
          <View style={[styles.dot]} />
        </View>

        <View>
          <TouchableOpacity
            style={styles.nextbtn}
            onPress={() => navigation.navigate('Home2')}>
            <Text style={styles.nextbtntext}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 100,
    flexDirection: 'column',
  },

  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imageContainer: {
    flex: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '900',
    fontFamily: ExtraBold,
  },
  subtitle: {
    textAlign: 'center',
    padding: 10,
    color: titlecolor,
    fontSize: 14,
    fontWeight: 'medium',
    fontFamily: SemiBold,
  },

  HeaderText: {
    fontSize: 18,
    fontWeight: 600,
    fontFamily: SemiBold,
  },
  footer: {
    flex: 10,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dotdotContainer: {
    flexDirection: 'row',
  },

  nextbtn: {},

  nextbtntext: {
    fontSize: 18,
    fontWeight: 600,
    fontFamily: SemiBold,
    color: nextbtncolor,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: bordercolor,
    marginHorizontal: 6,
  },
  activeDot: {
    width: 40,
    color: BlackColor,
    backgroundColor: BlackColor,
  },
});
