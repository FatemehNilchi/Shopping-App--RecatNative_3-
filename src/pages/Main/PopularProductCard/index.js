import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const PopularProductCard = props => {
  const {image = require('./../../../assets/products/cream-concept1.jpg')} =
    props;
  const nav = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        nav.navigate('ProductPage');
      }}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <View>
        <Text style={styles.title}>Shade Palette</Text>
        <Text style={styles.subtitle}>Naked</Text>
        <Text style={styles.price}>$29.00</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F5',
    borderRadius: 8,
    columnGap: 13,
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 8,
  },

  title: {
    fontSize: 11,
    fontWeight: '700',
    color: '#102A40',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 11,
    fontWeight: '600',
    color: '#A4A4A5',
    marginBottom: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#001C33',
  },
});
