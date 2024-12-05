import {Image, ScrollView, View} from 'react-native';
import React from 'react';
import SearchBar from './SearchBar';
import All_Featured from './All-Featured';
import DealOnTime from './DealOnTime';
import Category from './Category';
import {data} from './porducturl';
import ProductShow from './ProductShow';
import {Banner2, Mac, Sponsor, Summer, Tranding} from '../../config/Image';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const Product = () => {
  return (
    <View style={{width: responsiveWidth(100)}}>
      <SearchBar />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{width: responsiveWidth(100)}}>
        <All_Featured title={'All Featured'} />
        <Category data={data} />
        <DealOnTime />
        <ProductShow star={true} />
        <Image
          source={Banner2}
          height={'auto'}
          width={responsiveWidth(100)}
          resizeMethod="auto"
          resizeMode="cover"
          style={{alignSelf: 'center', marginTop: 20}}
        />
        <Image
          source={Mac}
          height={'auto'}
          width={responsiveWidth(100)}
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
