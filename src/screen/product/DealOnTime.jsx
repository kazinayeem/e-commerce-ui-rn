import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Banner, OnTime} from '../../config/Image';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const DealOnTime = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Banner}
        height={'auto'}
        width={responsiveWidth(100)}
        resizeMode="cover"
      />

      <Image
        source={OnTime}
        height={'auto'}
        width={responsiveWidth(100)}
        resizeMode="cover"
      />
    </View>
  );
};

export default DealOnTime;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: responsiveWidth(100),
    flexDirection: 'column',
    alignItems: 'center',
  },
});
