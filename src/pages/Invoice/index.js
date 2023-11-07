import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import StackHeader from '../../components/StackHeader';
import DetailText from './DetailText';
import Price from './Price';
import {useNavigation} from '@react-navigation/native';
import BorderSection from './BorderSection';

const Invoice = () => {
  const nav = useNavigation();

  return (
    <ScrollView
    // style={{flex: 1}}
    >
      <StackHeader title={'Invoice'} />
      <View style={styles.container}>
        <View style={styles.detailsSection}>
          <View style={styles.rowSection}>
            <DetailText
              title={'Date'}
              text={'March 10th 2021'}
              style={{flex: 0.6}}
            />
            <DetailText
              title={'Start Time'}
              text={'10:00 AM'}
              style={{flex: 0.3}}
            />
          </View>

          <View style={styles.rowSection}>
            <DetailText
              title={'Specialist'}
              text={'Bella'}
              style={{flex: 0.6}}
            />
            <DetailText
              title={'Duration'}
              text={'3 hours'}
              style={{flex: 0.3}}
            />
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.internalSection}>
          <Text style={styles.title}>Service</Text>
          <Price name={'Blunt Cut'} price={'$50'} />
          <Price name={'Manicure'} price={'$50'} />
          <View style={[styles.line, {borderStyle: 'dashed'}]} />
        </View>

        <View style={styles.internalSection}>
          <Price name={'Sub Total'} price={'$50'} />
          <Price name={'Discount'} price={'$50'} />
        </View>
        <BorderSection position={'bottom'} />

        <View
          style={[styles.line, {borderStyle: 'dashed', marginHorizontal: 20}]}
        />
        <BorderSection position={'top'} />
        <View
          style={[
            styles.internalSection,
            {borderBottomRightRadius: 10, borderBottomLeftRadius: 10},
          ]}>
          <Price name={'Total'} price={'$50'} />

          <View style={styles.card.container}>
            <Image
              source={require('../../assets/logo.png')}
              resizeMode="contain"
              style={styles.card.image}
            />
            <View>
              <Text style={styles.card.name}>Samantha Martin</Text>
              <Text style={styles.card.id}>3124325***</Text>
            </View>
            <Icon
              name="chevron-right"
              size={22}
              color="#000"
              style={styles.card.nextButton}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 630,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 15,
  },
  detailsSection: {
    paddingHorizontal: 24,
    paddingTop: 21,
    backgroundColor: '#f2f2f2',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    rowGap: 20,
  },
  rowSection: {
    flexDirection: 'row',
  },
  internalSection: {
    backgroundColor: '#f2f2f2',
    paddingTop: 17,
    paddingHorizontal: 24,
    rowGap: 16,
  },
  title: {
    color: '#000',
    fontWeight: '700',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 5,
  },
  line: {
    borderWidth: 1,
    height: 2,
    backgroundColor: '#f2f2f2',
    borderColor: '#e3e3e3',
  },

  image: {
    width: 32,
  },

  card: {
    container: {
      backgroundColor: '#fff',
      height: 72,
      width: '100%',
      marginTop: 10,
      marginBottom: 25,
      borderRadius: 10,
      paddingLeft: 23,

      columnGap: 21,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 32,
    },
    name: {
      fontSize: 15,
      color: '#000',
      marginBottom: 10,
      fontWeight: '500',
    },
    id: {
      fontSize: 12,
      fontWeight: '500',
      color: '#575757',
    },
    nextButton: {
      position: 'absolute',
      right: 23,
    },
  },
});
