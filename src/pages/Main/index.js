import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import HeroSection from './HeroSection';
import Tag from './Tag';
import HorizontalScrollView from './HorizontalScrollView';
import {useNavigation} from '@react-navigation/native';
import Title from './Title';
import PopularProductCard from './PopularProductCard';
import RecommendedProductCard from './RecommendedProductCard';

const Main = () => {
  const nav = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="menu"
          size={25}
          color="#000"
          onPress={() => {
            nav.goBack();
          }}
        />
        <Icon
          name="bell"
          size={25}
          color="#A456DD"
          onPress={() => {
            nav.goBack();
          }}
        />
      </View>

      <View style={styles.searchBar}>
        <View style={styles.searchInput}>
          <Icon name="search" size={24} color="#94A3B8" />
          <TextInput placeholder="Search..." placeholderTextColor={'#C6C6C6'} />
        </View>
        <TouchableOpacity
          style={styles.goToProductScannerPageButton}
          onPress={() => {
            nav.navigate('ProductScannerPage');
          }}>
          <Icon2 name="line-scan" size={24} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      <HorizontalScrollView style={styles.heroSection}>
        <HeroSection
          image={require('./../../assets/products/eyeshadows.jpg')}
        />
        <HeroSection image={require('./../../assets/products/cosmetics.jpg')} />
        <HeroSection />
      </HorizontalScrollView>
      <HorizontalScrollView style={styles.tags}>
        <Tag text={'Cream'} />
        <Tag text={'Moisturizers'} />
        <Tag text={'Beauty'} />
        <Tag text={'Serum'} />
        <Tag text={'Lotion'} />
        <Tag text={'Eye Shadow'} />
        <Tag text={'Make Up'} />
        <Tag text={'Cream'} />
        <Tag text={'Beauty'} />
        <Tag text={'Serum'} />
        <Tag text={'Eye Shadow'} />
      </HorizontalScrollView>
      <Title text="RECOMMENDED" />

      <HorizontalScrollView style={styles.recommendedProduct}>
        <RecommendedProductCard
          image={require('./../../assets/products/cosmetics.jpg')}
        />
        <RecommendedProductCard
          image={require('./../../assets/products/composition.jpg')}
        />
        <RecommendedProductCard
          image={require('./../../assets/products/flowers.jpg')}
        />
        <RecommendedProductCard />
      </HorizontalScrollView>

      <Title text="POPULAR" />

      <HorizontalScrollView style={styles.popularProduct}>
        <PopularProductCard />
        <PopularProductCard
          image={require('./../../assets/products/display.jpg')}
        />
        <PopularProductCard />
      </HorizontalScrollView>

      <HorizontalScrollView style={styles.popularProduct}>
        <PopularProductCard
          image={require('./../../assets/products/minimal.jpg')}
        />
        <PopularProductCard
          image={require('./../../assets/products/flowers.jpg')}
        />
        <PopularProductCard />
      </HorizontalScrollView>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
    backgroundColor: '#fff',
    elevation: 30,
    shadowColor: '#444',
    paddingHorizontal: 20,
  },

  searchBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 16,
    columnGap: 11,
  },
  goToProductScannerPageButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C6C6C6',
    borderRadius: 6,
  },
  searchInput: {
    flex: 1,
    borderRadius: 6,
    height: 44,
    borderColor: '#C6C6C6',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  heroSection: {
    marginVertical: 19,
  },
  tags: {
    marginBottom: 25,
  },
  recommendedProduct: {
    marginBottom: 25,
  },
  popularProduct: {
    marginBottom: 15,
  },
});
