import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {BlackColor} from '../config/color';
import {Regular} from '../config/Font';

export default function TextInputProfile({
  placeholder,
  title,
  placeholdercolor,
  password = false,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titletext}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholdercolor || BlackColor}
        style={styles.input}
        secureTextEntry={password}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 3,
  },

  titletext: {
    fontSize: 12,
    fontFamily: Regular,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#C8C8C8',
    borderRadius: 5,
    borderWidth: 1,
  },
});
