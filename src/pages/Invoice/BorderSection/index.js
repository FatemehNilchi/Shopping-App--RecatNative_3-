import {StyleSheet, View} from 'react-native';
import React from 'react';

const BorderSection = ({position}) => {
  if (position === 'top') {
    borderLeftStyle = {borderBottomRightRadius: 19};
    borderRightStyle = {borderBottomLeftRadius: 19};
  } else if (position === 'bottom') {
    borderLeftStyle = {borderTopRightRadius: 19};
    borderRightStyle = {borderTopLeftRadius: 19};
  }

  return (
    <View style={styles.container}>
      <View style={[styles.leftRadius, borderLeftStyle]} />

      <View style={[styles.rightRadius, borderRightStyle]} />
    </View>
  );
};

export default BorderSection;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftRadius: {
    backgroundColor: '#fff',
    height: 20,
    width: 20,
    position: 'absolute',
    left: 0,
  },
  rightRadius: {
    backgroundColor: '#fff',
    height: 20,
    width: 20,
    position: 'absolute',
    right: 0,
  },
});
