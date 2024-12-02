import {createDrawerNavigator} from '@react-navigation/drawer';
import Pagw2 from './screen/Pagw2';
import React from 'react';
import MyTabs from './TabNavigator';
import SignIn from './screen/Auth/SignIn';
import SignUp from './screen/Auth/SignUp';
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Profile" component={Pagw2} />
      <Drawer.Screen name="Login" component={SignIn} />
      <Drawer.Screen name="Register" component={SignUp} />
    </Drawer.Navigator>
  );
}
