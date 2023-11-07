import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PriceDetails = props => {
  const {style, title, price} = props;
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{title}</Text>
      <Text style={[styles.text, style]}>{price} </Text>
    </View>
  );
};

export default PriceDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000',
    fontSize: 15,
  },
});
