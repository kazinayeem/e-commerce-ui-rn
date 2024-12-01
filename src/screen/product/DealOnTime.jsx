import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Banner, OnTime} from '../../config/Image';

const DealOnTime = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={Banner}
          height={'auto'}
          width={'100%'}
          resizeMethod="auto"
          resizeMode="cover"
        />
      </View>

      <View>
        <Image
          source={OnTime}
          height={'auto'}
          width={'100%'}
          resizeMethod="auto"
          resizeMode="cover"
        />
      </View> 
    </View>
  );
};

export default DealOnTime;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '97%',
    flexDirection: 'column',
    alignItems: 'center',
  },

  imagecontainer: {},

  dealOncontainer: {},
});
