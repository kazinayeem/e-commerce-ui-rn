import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {nextbtncolor} from '../config/color';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SemiBold} from '../config/Font';

export default function BigButton({title, textcolor, w, h, fs, mt, mb}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: responsiveWidth(w) || responsiveWidth(90),
          height: responsiveHeight(h) || responsiveHeight(5.6),
          marginTop: responsiveWidth(mt) || responsiveWidth(0),
          marginBottom: responsiveWidth(mb) || responsiveWidth(0),
        },
      ]}>
      <Text
        style={[
          styles.buttonText,
          {
            color: textcolor || '#fff',
            fontSize: responsiveFontSize(fs) || responsiveFontSize(3),
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: nextbtncolor,
    borderRadius: 5,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: SemiBold,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
