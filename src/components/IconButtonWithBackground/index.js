import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import React from 'react';

const IconButtonWithBackground = props => {
  const {style, iconName, onPress} = props;
  return (
    <TouchableOpacity style={[styles.iconButton, style]} onPress={onPress}>
      <Icon name={iconName} size={20} color="#fff" />
    </TouchableOpacity>
  );
};

export default IconButtonWithBackground;

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
