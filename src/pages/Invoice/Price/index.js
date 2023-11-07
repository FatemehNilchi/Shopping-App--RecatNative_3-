import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Price = props => {
  const {name, price} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>{price}</Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
  text: {
    color: '#A456DD',
    fontSize: 14,
    fontWeight: '600',
  },
});
