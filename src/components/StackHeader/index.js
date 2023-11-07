import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const StackHeader = ({title = ''}) => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <Icon
        name="chevron-left"
        size={25}
        color="#000"
        style={styles.icon}
        onPress={() => {
          nav.goBack();
        }}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default StackHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    backgroundColor: '#fff',
    elevation: 30,
    shadowColor: '#444',
    zIndex: 2,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  icon: {
    position: 'absolute',
    left: 20,
  },
});
