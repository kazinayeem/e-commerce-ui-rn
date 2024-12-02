import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GetStarted from './screen/main/GetStarted';
import ForgotPassword from './screen/Auth/ForgotPassword';
import React from 'react';
import Screen1 from './screen/SplashScreen/Screen1';
import Page1 from './screen/Page1';
import Pagw2 from './screen/Pagw2';
import SignIn from './screen/Auth/SignIn';
import SignUp from './screen/Auth/SignUp';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home1" component={Page1} />
      <Tab.Screen name="Profile" component={Pagw2} />
      <Tab.Screen name="login" component={SignIn} />
      <Tab.Screen name="register" component={SignUp} />
    </Tab.Navigator>
  );
}

export default MyTabs;
