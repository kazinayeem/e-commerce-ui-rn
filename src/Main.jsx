import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './screen/SplashScreen/Screen1';
import Screen2 from './screen/SplashScreen/Screen2';
import Screen3 from './screen/SplashScreen/Screen3';
import SignIn from './screen/Auth/SignIn';
import SignUp from './screen/Auth/SignUp';
import ForgotPassword from './screen/Auth/ForgotPassword';
import GetStarted from './screen/main/GetStarted';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        animation: 'flip',
        animationDuration: 9000,
        animationMatchesGesture: true,
        gestureEnabled: true,
        gestureDirection: 'vertical',
      }}>
      <Stack.Screen name="Home" component={Screen1} />
      <Stack.Screen name="Home2" component={Screen2} />
      <Stack.Screen name="Home3" component={Screen3} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
    </Stack.Navigator>
  );
}

export default function Main() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
