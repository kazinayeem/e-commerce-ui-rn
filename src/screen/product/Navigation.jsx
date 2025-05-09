import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Product from './Product';
import SingleProduct from './singleproduct/SingleProduct';
import TrendingProducts from './TrendingProducts';

const Stack = createNativeStackNavigator();

export default function ProductNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="TrendingProducts"
        component={TrendingProducts}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen
        name="SingleProduct"
        component={SingleProduct}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
