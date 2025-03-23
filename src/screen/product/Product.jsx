import axios from 'axios';
import React, { useEffect } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { Banner2, Mac, Sponsor, Summer, Tranding } from '../../config/Image';
import All_Featured from './All-Featured';
import Category from './Category';
import DealOnTime from './DealOnTime';
import ProductShow from './ProductShow';
import SearchBar from './SearchBar';

const Product = () => {
  const [CategoryData, setCategoryData] = React.useState([]);
  useEffect(() => {
    axios
      .get('https://myshop-2-production.up.railway.app/api/categories')
      .then(res => {
        setCategoryData(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <View style={{width: responsiveWidth(100)}}>
      <SearchBar />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{width: responsiveWidth(100)}}>
        <All_Featured title={'All Featured'} />
        <Category data={CategoryData} />
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
