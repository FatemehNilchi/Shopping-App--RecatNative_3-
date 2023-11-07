import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import StackHeader from '../../components/StackHeader';
import BigButton from '../../components/BigButton';
import CustomTextInput from '../../components/TextInput';
import AuthMethodSection from '../../components/AuthMethodSection';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const nav = useNavigation();
  return (
    <ScrollView>
      <View>
        <StackHeader />
        <View style={styles.container}>
          <Text style={styles.mainTitle}>Sign Up</Text>
          <Text style={styles.subTitle}>Get great experience with AINVE</Text>

          <View style={styles.signUpSignInSection}>
            <View style={styles.signUpBackgrownd}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </View>
            <View style={styles.signInBackgrownd}>
              <Text style={styles.signInText}>Sign In</Text>
            </View>
          </View>
          <View>
            <CustomTextInput
              title={'Full Name'}
              text={'Enter your name'}
              IconName={'user'}
            />
            <CustomTextInput
              title={'Phone Number'}
              text={'Enter your number'}
              IconName={'phone'}
            />
            <CustomTextInput
              title={'Password'}
              text={'Enter your password'}
              IconName={'lock'}
            />
          </View>
          <BigButton
            text={'Create Account'}
            onPress={() => {
              nav.navigate('Main');
            }}
          />
          <AuthMethodSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 33,
    backgroundColor: '#fff',
  },
  mainTitle: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  subTitle: {
    marginBottom: 24,
    fontSize: 15,
    fontWeight: '400',
    color: '#A9AAB8',
  },
  signUpSignInSection: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    borderRadius: 25,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    // borderWidth:1
  },
  signUpBackgrownd: {
    width: '50%',
    height: '100%',
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1
  },
  signInBackgrownd: {
    width: '50%',
    height: '100%',
    borderRadius: 25,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1
  },
  signUpText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
  },
  signInText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#A7A9B7',
  },
});
