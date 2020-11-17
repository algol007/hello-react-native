import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import OrganizePhoto from '../../assets/images/undraw_Organize_photos_re_ogcy.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learn to using SVG File</Text>
      <View style={styles.subtitle}>
        <Text style={{marginBottom: 10}}>SVG Using URI</Text>
        <SvgUri
          width="100"
          height="100"
          uri={
            'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'
          }
        />
      </View>
      <View style={styles.subtitle}>
        <Text style={{marginBottom: 10}}>SVG From File</Text>
        <OrganizePhoto width={150} height={150} />
      </View>
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 20,
  },
});
