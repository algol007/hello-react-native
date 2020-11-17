import React from 'react';
import {Text, View, Image} from 'react-native';

const StylingComponent = () => {
  return (
    <View style={{marginBottom: 30}}>
      <Text style={{fontWeight: 'bold', textAlign: 'center', marginBottom: 10}}>
        STYLING COMPONENT
      </Text>
      <View
        style={{
          backgroundColor: '#ccc',
          padding: 10,
          width: 170,
          borderRadius: 5,
        }}>
        <Image
          source={{
            uri:
              'https://www.pngitem.com/pimgs/m/490-4908247_2019-13-inch-silver-macbook-pro-2019-hd.png',
          }}
          style={{width: 150, height: 100, marginBottom: 10, borderRadius: 5}}
        />
        <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>
          New MacBook Pro 2020
        </Text>
        <Text style={{fontWeight: 'bold', color: '#FF2B22', marginBottom: 5}}>
          Rp. 22.000.000
        </Text>
        <Text>Jakarta Barat</Text>
        <View
          style={{
            backgroundColor: 'green',
            paddingVertical: 5,
            marginTop: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{textAlign: 'center', color: '#FFF', fontWeight: 'bold'}}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StylingComponent;
