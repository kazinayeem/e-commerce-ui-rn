import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {nextbtncolor} from '../config/color';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SemiBold} from '../config/Font';

export default function BigButton({
  title,
  textcolor,
  w,
  h,
  fs,
  mt,
  mb,
  position,
  br,
  icon = false,
  children,
  action,
  actiontitle,
  bg,
}) {
  const presshandeler = () => {
    if (typeof action === 'function') {
      action(actiontitle);
    } else {
      console.log('not found');
    }
  };

  return (
    <TouchableOpacity
      onPress={presshandeler}
      style={[
        styles.button,
        {
          width: responsiveWidth(w) || responsiveWidth(90),
          height: responsiveHeight(h) || responsiveHeight(5.6),
          marginTop: responsiveWidth(mt) || responsiveWidth(0),
          marginBottom: responsiveWidth(mb) || responsiveWidth(0),
          alignSelf: position || 'center',
          borderRadius: br || 5,
          flexDirection: icon && 'row',
          backgroundColor: bg || nextbtncolor,
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

      {icon && children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
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
