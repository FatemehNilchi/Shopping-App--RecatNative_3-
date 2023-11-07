import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RecommendedProductCard = props => {
  const {image = require('./../../../assets/products/cream-concept1.jpg')} =
    props;
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <Text style={styles.title}>Givenchy Blossom</Text>
      <View style={styles.rowSection}>
        <View>
          <Text style={styles.subtitle}>Givenchy</Text>
          <Text style={styles.price}>$29.00</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="shopping-outline" size={16} color="#4B4B4B" />
        </View>
      </View>
    </View>
  );
};

export default RecommendedProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    paddingBottom: 9,
    borderRadius: 8,
  },
  image: {
    height: 86,
    width: 124,
    borderRadius: 8,
    marginBottom: 10,
  },
  rowSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  title: {
    fontSize: 11,
    fontWeight: '700',
    color: '#102A40',
    marginBottom: 4,
    marginHorizontal: 8,
  },
  subtitle: {
    fontSize: 11,
    fontWeight: '600',
    color: '#A4A4A5',
    marginBottom: 7,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#001C33',
  },
  iconContainer: {
    backgroundColor: '#ddd',
    borderRadius: 25,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
