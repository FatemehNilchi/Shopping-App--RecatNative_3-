import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const ProductCard = () => {
  const nav = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      //   onPress={() => {
      //     nav.navigate('ProductPage');
      //   }}
    >
      <Image
        source={require('./../../../assets/products/cream-concept.jpg')}
        resizeMode="cover"
        style={styles.image}
      />
      <View>
        <Text style={styles.productName}>Givenchy </Text>
        <Text style={styles.productPrice}>$29.00</Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    columnGap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  productName: {
    fontSize: 12,
    color: '#000',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000',
  },
  editButton: {
    width: 57,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A456DD',
    borderRadius: 15,
    position: 'absolute',
    right:0
  },
  editText:{
    fontSize: 14,
    color: '#A456DD',
  }
});
