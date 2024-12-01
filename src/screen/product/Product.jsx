import {Image, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import All_Featured from './All-Featured';
import DealOnTime from './DealOnTime';
import Category from './Category';
import {data} from './porducturl';
import ProductShow from './ProductShow';
import {Banner2, Mac, Sponsor, Summer, Tranding} from '../../config/Image';

const Product = () => {
  useEffect(() => {}, []);
  return (
    <View style={{flex: 1}}>
      <SearchBar />
      <ScrollView>
        <All_Featured />
        <Category data={data} />
        <DealOnTime />
        <ProductShow star={true} />
        <Image
          source={Banner2}
          height={'auto'}
          width={'100%'}
          resizeMethod="auto"
          resizeMode="cover"
          style={{alignSelf: 'center', marginTop: 20}}
        />
        <Image
          source={Mac}
          height={'auto'}
          width={'100%'}
          resizeMethod="auto"
          resizeMode="cover"
          style={{alignSelf: 'center', marginTop: 20}}
        />
        <Image
          source={Tranding}
          height={'auto'}
          width={'100%'}
          resizeMethod="auto"
          resizeMode="cover"
          style={{alignSelf: 'center', marginTop: 20}}
        />
        <ProductShow star={false} />
        <Image
          source={Summer}
          height={'auto'}
          width={'100%'}
          resizeMethod="auto"
          resizeMode="cover"
          style={{alignSelf: 'center', marginTop: 20}}
        />
        <Image
          source={Sponsor}
          height={'auto'}
          width={'100%'}
          resizeMethod="auto"
          resizeMode="cover"
          style={{alignSelf: 'center', marginTop: 20}}
        />
      </ScrollView>
    </View>
  );
};

export default Product;
