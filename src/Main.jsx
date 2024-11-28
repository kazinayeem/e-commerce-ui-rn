
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './screen/SplashScreen/Screen1';
import Screen2 from './screen/SplashScreen/Screen2';
import Screen3 from './screen/SplashScreen/Screen3';

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
      }}>
      <Stack.Screen name="Home" component={Screen1} />
      <Stack.Screen name="Home2" component={Screen2} />
      <Stack.Screen name="Home3" component={Screen3} />
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
