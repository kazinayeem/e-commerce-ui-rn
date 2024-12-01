import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const SingleProduct = props => {
  const [product, setproduct] = useState(null);
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${props.route.params.id}`)
      .then(res => setproduct(res.data))
      .catch(e => {
        console.log(e);
      });
  }, [props.route.params.id]);

  return (
    <View>
      {!product ? (
        <>
          <ActivityIndicator size="large" color="#6666" />
          <ActivityIndicator size="large" color="#3434" />
          <ActivityIndicator size="large" color="#355" />
          <ActivityIndicator size="large" color="#3423" />
        </>
      ) : (
        <>
          <Image width={300} height={300} source={{uri: product.images[0]}} />
          <Text>{product?.title}</Text>
          <Text>{product?.description}</Text>
          <Text>${product?.price}</Text>
        </>
      )}
    </View>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({});
