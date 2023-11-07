import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import ProductCard from './ProductCard';
import IconBarHeader from '../../components/IconBarHeader';
import React from 'react';

const ProductScannerPage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <IconBarHeader />
        <Image
          source={require('./../../assets/products/cream-concept2.png')}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.line} />
        <View style={styles.resultContainer}>
          <Text style={styles.resultHeader}>RESULT (5)</Text>
          <ProductCard />
          <ProductCard />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductScannerPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 28,
  },
  image: {
    height: 450,
    width: '100%',
    borderWidth: 1,
  },
  line: {
    backgroundColor: '#E0E0E0',
    height: 4,
    width: 42,
    borderRadius: 5,
    marginTop: 14,
    alignSelf: 'center',
  },
  resultContainer: {
    paddingHorizontal: 20,
    rowGap: 16,
  },
  resultHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
});
