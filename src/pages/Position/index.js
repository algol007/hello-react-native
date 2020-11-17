import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Position = () => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', textAlign: 'center', marginBottom: 5}}>
        POSITION COMPONENT
      </Text>
      <View style={{alignItems: 'center'}}>
        <View style={styles.cartWrapper}>
          <Image
            source={{
              uri:
                'https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png',
            }}
            style={styles.cartIcon}
          />
          <Text style={styles.cartOrder}>10</Text>
        </View>
        <Text style={styles.cartText}>Keranjang Belanja Anda</Text>
      </View>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  cartWrapper: {
    borderWidth: 1,
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  cartIcon: {
    width: 100,
    height: 100,
  },
  cartOrder: {
    backgroundColor: 'green',
    position: 'absolute',
    textAlign: 'center',
    paddingVertical: 5,
    color: 'white',
    borderRadius: 15,
    width: 30,
    height: 30,
    top: 0,
    right: 0,
  },
  cartText: {
    textAlign: 'center',
  },
});
