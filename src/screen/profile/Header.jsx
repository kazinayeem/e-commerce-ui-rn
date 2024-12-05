import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Bold} from '../../config/Font';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
export default function Header(props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Icon name="left" size={responsiveFontSize(2.3)} />
      </TouchableOpacity>
      <Text
        style={{
          paddingHorizontal: responsiveWidth(30),
          fontFamily: Bold,
          fontSize: responsiveFontSize(2.2),
        }}>
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: responsiveWidth(100),
    height: responsiveHeight(8),
    alignItems: 'center',
  },
});
