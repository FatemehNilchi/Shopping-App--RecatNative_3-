import {StyleSheet, Text} from 'react-native';
import React from 'react';

const Title = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#313946',
    marginBottom: 7,
    marginLeft: 20,
  },
});
