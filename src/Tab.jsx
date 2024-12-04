/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import React from 'react';
import Product from './screen/product/Product';
import {View} from 'react-native';
import TrendingProducts from './screen/product/TrendingProducts';
import ProductNavigation from './screen/product/Navigation';
import SignIn from './screen/Auth/SignIn';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Product"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Product}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon  
                name={'home'}
                size={24}
                color={focused ? '#EB3030' : 'black'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="WishList"
        component={ProductNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon1
                name={'favorite-border'}
                size={24}
                color={focused ? '#EB3030' : 'black'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          title: '',
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 60,
                  width: 60,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  elevation: 2,
                  marginBottom: 20,
                }}>
                <Icon
                  name={'shopping-cart'}
                  size={24}
                  color={focused ? '#EB3030' : 'black'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SignIn}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon
                name={'search'}
                size={24}
                color={focused ? '#EB3030' : 'black'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Setting"
        component={SignIn}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon2
                name={'setting'}
                size={24}
                color={focused ? '#EB3030' : 'black'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
