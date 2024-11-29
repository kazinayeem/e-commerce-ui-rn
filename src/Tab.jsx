/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import Page from './screen/Page';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Page1') {
            iconName = focused ? 'search-plus' : 'search-minus';
          } else if (route.name === 'Page2') {
            iconName = focused ? 'user' : 'search';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Page1" component={Page} />
      <Tab.Screen name="Page2" component={Page} />
    </Tab.Navigator>
  );
}

export default MyTabs;
