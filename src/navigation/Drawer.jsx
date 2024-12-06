/* eslint-disable react/no-unstable-nested-components */
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import MyTabs from './Tab';
import {Alert, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from '../screen/profile/Profile';
import CheckOut from '../screen/profile/CheckOut';
import {Logo} from '../config/Image';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="MainPage"
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: '#F2F2F2'},
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{marginLeft: 15}}>
            <Icon name={'bars'} size={30} color={'#ffffwsw'} />
          </TouchableOpacity>
        ),
        drawer: () => (
          <TouchableOpacity
            style={{paddingHorizontal: 15}}
            onPress={() => Alert.alert('Icon Pressed')}>
            <Icon name={'user'} size={30} color={'#ffffwsw'} />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <Image
            source={Logo}
            style={{width: 100, height: 40}}
            resizeMode="contain"
          />
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{paddingHorizontal: 15}}
            onPress={() => navigation.navigate('Profile')}>
            <Icon name={'user'} size={30} color={'#ffffwsw'} />
          </TouchableOpacity>
        ),
      })}>
      <Drawer.Screen name="MainPage" component={MyTabs} />
      <Drawer.Screen
        name="Profile"
        options={{headerShown: false}}
        component={Profile}
      />
      <Drawer.Screen
        name="CheckOut"
        options={{headerShown: false}}
        component={CheckOut}
      />
    </Drawer.Navigator>
  );
}
