import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Product = (props) => {
  return (
    <View style={{marginTop: 20}}>
      <View style={styles.cardWrapper}>
        <Image
          source={{
            uri:
              'https://www.pngitem.com/pimgs/m/490-4908247_2019-13-inch-silver-macbook-pro-2019-hd.png',
          }}
          style={styles.cardImage}
        />
        <Text style={styles.pruductTitle}>New MacBook Pro 2020</Text>
        <Text style={styles.productPrice}>Rp. 22.000.000</Text>
        <Text>Jakarta Barat</Text>
        <TouchableOpacity onPress={props.buttonBuy}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonBuy}>BELI</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardWrapper: {
    backgroundColor: '#ccc',
    padding: 10,
    width: 170,
    borderRadius: 5,
  },
  cardImage: {
    width: 150,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#FF2B22',
    marginBottom: 5,
  },
  buttonWrapper: {
    backgroundColor: 'green',
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonBuy: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  },
});
