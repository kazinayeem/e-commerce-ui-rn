import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import {Bold} from '../../config/Font';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default function Header({title, navigation, action, pageName, icon2}) {
  const handleBackPress = () => {
    if (typeof action === 'function') {
      action(pageName);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.header}>
      {/* Back Button */}
      <TouchableOpacity onPress={handleBackPress} style={styles.iconContainer}>
        <Icon name="left" size={responsiveFontSize(3)} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right Icon */}
      <TouchableOpacity onPress={handleBackPress} style={styles.iconContainer}>
        {icon2 && <Icon1 name="favorite-border" size={responsiveFontSize(3)} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingHorizontal: responsiveWidth(4),
    flexDirection: 'row',
    width: responsiveWidth(100),
    height: responsiveHeight(7),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: Bold,
    fontSize: responsiveFontSize(2.2),
  },
  iconContainer: {
    padding: 5, // Adds touchable area for the icons
  },
});
