import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import All_Featured from './All-Featured';
import DealOnTime from './DealOnTime';
import Category from './Category';
import {data} from './porducturl';


const Product = () => {
  const [category, setcategory] = useState(data);
  useEffect(() => {}, []);
  return (
    <View style={{flex: 1}}>
      <SearchBar />
      <All_Featured />
      <Category data={data} />
    
      <DealOnTime />
    </View>
  );
};

export default Product;
