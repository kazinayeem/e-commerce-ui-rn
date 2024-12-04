import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Bold } from '../../config/Font';
export default function Header(props) {
    
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Icon name="left" size={30} />
      </TouchableOpacity>
      <Text style={{paddingHorizontal: 100, fontFamily: Bold, fontSize: 15}}>
        {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
});
