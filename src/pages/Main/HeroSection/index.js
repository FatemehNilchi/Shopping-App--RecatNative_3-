import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width - 80;

const HeroSection = props => {
  const {image = require('./../../../assets/products/cream-concept1.jpg')} =
    props;
  return (
    <View>
      <Image source={image} resizeMode="cover" style={styles.imageBackground} />

      <View style={styles.overlay}>
        <Text style={styles.text}>
          Find Best{'\n'}
          Beauty{'\n'}
          Product.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 137,
    width: windowWidth,
    borderRadius: 12,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: windowWidth,
    borderRadius: 12,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HeroSection;
