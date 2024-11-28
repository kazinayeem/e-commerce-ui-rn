/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image2} from '../../config/Image';
import {useNavigation} from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.HeaderText}>1/3</Text>
        <TouchableOpacity>
          <Text style={styles.HeaderText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={Image2}
          width={300}
          height={400}
          resizeMode="contain"
          style={{marginBottom: 20}}
        />

        <Text style={styles.title}>Get Your Order</Text>

        <Text style={styles.subtitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
          <Text style={styles.prevText}>Prev</Text>
        </TouchableOpacity>
        <View style={styles.dotdotContainer}>
          <View style={[styles.dot]} />

          <View style={[styles.dot]} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>

        <View>
          <TouchableOpacity style={styles.nextbtn}>
            <Text
              style={styles.nextbtntext}
              onPress={() => navigation.navigate('Home3')}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Screen2;

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
    fontFamily: 'Montserrat-ExtraBold',
  },
  subtitle: {
    textAlign: 'center',
    padding: 10,
    color: '#A8A8A9',
    fontSize: 14,
    fontWeight: 'medium',
    fontFamily: 'Montserrat-SemiBold',
  },

  HeaderText: {
    fontSize: 18,
    fontWeight: 600,
    fontFamily: 'Montserrat-SemiBold',
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
    fontFamily: 'Montserrat-SemiBold',
    color: '#F83758',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 6,
  },
  activeDot: {
    width: 40,
    color: 'black',
    backgroundColor: 'black',
  },
  prevText: {
    fontSize: 18,
    fontWeight: 600,
    fontFamily: 'Montserrat-SemiBold',
    color: '#ccc',
  },
});
