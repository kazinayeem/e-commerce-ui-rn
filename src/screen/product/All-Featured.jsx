import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BlackColor} from '../../config/color';
import { Light, SemiBold } from '../../config/Font';

const All_Featured = props => {
  return (
    <View style={styles.container}>
      <View style={styles.maintextcontainer}>
        <Text style={styles.maintext}>{props.title}</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>Sort</Text>
          <Icon name="sort" size={20} color={BlackColor} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>Filter</Text>
          <Icon name="filter" size={20} color={BlackColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default All_Featured;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',
    height: 50,
    alignContent: 'center',
    alignSelf: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
  },

  btntext: {
    fontSize: 14,
    fontFamily: Light,
    fontWeight: '200',
    color: BlackColor,
  },
  maintext: {
    fontSize: 18,
    fontFamily: SemiBold,
    fontWeight: '500',
    color: BlackColor,
  },
  maintextcontainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
});
