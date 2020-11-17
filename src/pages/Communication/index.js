import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

const Communication = () => {
  const [totalOrder, setTotalOrder] = useState(0);

  return (
    <View>
      <Cart order={totalOrder} />
      <Product
        buttonBuy={() => {
          setTotalOrder(totalOrder + 1);
        }}
      />
    </View>
  );
};

export default Communication;

const styles = StyleSheet.create({});
