import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import StackHeader from '../../components/StackHeader';
import ProductCard from './ProductCard';
import PriceDetails from './PriceDetails';
import BigButton from '../../components/BigButton';
import {useNavigation} from '@react-navigation/native';


const ReviewPurchase = () => {
  const nav = useNavigation();

  return (
    <ScrollView>
      <StackHeader title={'Review Purchase'} />
      <View style={styles.container}>
        <View style={styles.productSection}>
          <ProductCard />
          <ProductCard />
        </View>
        <Text style={styles.deliveryTitle}>Delivery Location</Text>
        <View style={styles.deliverySection}>
          <View
            style={styles.deliveryCard.container}
            //   onPress={() => {
            //     nav.navigate('ProductPage');
            //   }}
          >
            <Image
              source={require('./../../assets/products/cosmetics.jpg')}
              resizeMode="cover"
              style={styles.deliveryCard.image}
            />
            <View>
              <Text style={styles.deliveryCard.addres}>
                Preston Rd, Inglewood St.
              </Text>
              <Text style={styles.deliveryCard.name}>Maire 98380</Text>
            </View>
            <Icon
              name="chevron-right"
              size={22}
              color="#000"
              style={styles.deliveryCard.selectAddressButton}
            />
          </View>
        </View>
        <View style={styles.havingGiftCodeSection}>
          <Text style={styles.giftCodeText}>Have a gift code?</Text>
        </View>

        <View style={styles.priceSection}>
          <PriceDetails title={'Subtotal'} price={'$97.00'} />
          <PriceDetails title={'Shipping & Handling'} price={'$19.99'} />
          <PriceDetails title={'Tax'} price={'$4.00'} />
          <PriceDetails
            title={'Total'}
            price={'$120.00'}
            style={{fontSize: 18, fontWeight: '800'}}
          />
        </View>
        <View style={styles.acceptanceSection}>
          <Text style={styles.terms.text}>
            By clicking "Purchase", you accept the{' '}
          </Text>
          <Text style={[styles.terms.text, styles.terms.purpleText]}>
            terms
          </Text>
        </View>

        <BigButton text={'Purchase'} style={styles.button} onPress={() => {
          nav.navigate('Invoice');
        }} />
      </View>
    </ScrollView>
  );
};

export default ReviewPurchase;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 18,
  },
  productSection: {
    rowGap: 30,
    paddingHorizontal: 20,
    paddingTop: 17,
    paddingBottom: 26,
    borderBottomWidth: 1,
    borderColor: '#E7E8E8',
  },
  deliverySection: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#E7E8E8',
  },
  havingGiftCodeSection: {
    paddingHorizontal: 20,
    paddingVertical: 26,
    borderBottomWidth: 1,
    borderColor: '#E7E8E8',
  },
  priceSection: {
    paddingHorizontal: 20,
    rowGap: 20,
    paddingTop: 23,
    paddingBottom: 32,
  },
  acceptanceSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
  deliveryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 24,
    marginBottom: 8,
    marginLeft: 20,
  },
  deliveryCard: {
    container: {
      columnGap: 14,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      height: 56,
      width: 56,
      borderRadius: 10,
    },
    addres: {
      fontSize: 11,
      color: '#000',
      marginBottom: 10,
      fontWeight: '500',
    },
    name: {
      fontSize: 12,
      color: '#0D283D',
    },
    selectAddressButton: {
      position: 'absolute',
      right: 0,
    },
  },
  giftCodeText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#A456DD',
  },
  terms: {
    text: {
      fontSize: 12,
      color: '#3B3B3B',
    },
    purpleText: {
      color: '#A456DD',
    },
  },
  button: {
    marginHorizontal: 20,
  },
});
