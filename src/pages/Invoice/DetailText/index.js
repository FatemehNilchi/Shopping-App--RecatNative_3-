import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailText = props => {
  const {style, text, title} = props;

  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default DetailText;

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 13,
  },
  text: {
    color: '#A456DD',
    fontSize: 15,
    fontWeight: '500',
  },
});
