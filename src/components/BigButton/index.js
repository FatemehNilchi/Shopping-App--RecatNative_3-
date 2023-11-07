import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const BigButton = props => {
  const {onPress, style, text} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BigButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A456DD',
    flex: 1,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
});
