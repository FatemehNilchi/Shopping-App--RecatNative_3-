import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Tag = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 25,
  },
  text: {
    color: '#001C33',
    fontSize: 13,
    fontWeight: '500',
  },
});
