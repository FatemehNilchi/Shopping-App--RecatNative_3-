import {StyleSheet, View} from 'react-native';
import IconButtonWithBackground from '../../components/IconButtonWithBackground';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const IconBarHeader = () => {
  const nav = useNavigation();
  return (
    <View style={styles.iconBar}>
      <IconButtonWithBackground
        iconName={'chevron-left'}
        onPress={() => {
          nav.goBack();
        }}
      />
      <IconButtonWithBackground iconName={'shopping-bag'} />
    </View>
  );
};

export default IconBarHeader;

const styles = StyleSheet.create({
  iconBar: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    zIndex: 2,
  },
});
