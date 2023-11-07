import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ProductCard = () => {
  const nav = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        nav.navigate('ProductPage');
      }}>
      <Image
        source={require('./../../../assets/products/cream-concept.jpg')}
        resizeMode="cover"
        style={styles.image}
      />
      <View>
        <Text style={styles.productName}>Givenchy L’intemporel Blossom</Text>
        <Text style={styles.cosmeticProductCreator}>Givenchy</Text>
        <Text style={styles.productPrice}>$29.00</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    columnGap: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  cosmeticProductCreator: {
    fontSize: 12,
    color: '#B3B3B3',
    marginBottom: 12,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
});
