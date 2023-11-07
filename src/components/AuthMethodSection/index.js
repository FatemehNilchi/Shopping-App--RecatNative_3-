import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const AuthMethodButton = ({iconName}) => {
  const imageSource = getImageSource(iconName);
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={imageSource} resizeMode="contain" style={styles.image} />
    </TouchableOpacity>
  );
};

const getImageSource = iconName => {
  switch (iconName) {
    case 'google':
      return require('../../assets/socialMediaImages/google.png');
    case 'facebook':
      return require('../../assets/socialMediaImages/facebook.png');
    case 'apple':
      return require('../../assets/socialMediaImages/apple.png');
  }
};

const AuthMethodSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Or Sign Up With</Text>
      <View style={styles.authMethodSection}>
        <AuthMethodButton iconName="google" />
        <AuthMethodButton iconName="facebook" />
        <AuthMethodButton iconName="apple" />
      </View>
    </View>
  );
};
export default AuthMethodSection;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: '#eee',
    marginTop: 15,
  },
  authMethodSection: {
    flexDirection: 'row',
    columnGap: 12,
  },
  text: {
    color: '#A8AAB8',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 14,
    marginTop: 17,
  },
  button: {
    flex: 1,
    height: 43,
    borderRadius: 8,
    borderColor: '#D9DDE4',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 24,
  },
});
