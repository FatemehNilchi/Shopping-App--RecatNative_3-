import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('screen');
const SlideItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="contain" style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
  },
  image: {
    flex: 0.6,
    width: '100%',
  },
  content: {
    flex: 0.5,
    width: 305,

    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
    marginVertical: 12,
    color: '#333',
    textAlign: 'center',
  },
});
