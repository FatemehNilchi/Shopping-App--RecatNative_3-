import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import IconBarHeader from '../../components/IconBarHeader';
import BigButton from '../../components/BigButton';
import Icon from 'react-native-vector-icons/Fontisto';
import React from 'react';
import {useNavigation} from '@react-navigation/native';


const ProductPage = () => {
  const nav = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <IconBarHeader />
        <Image
          source={require('./../../assets/products/cream-concept.jpg')}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.textsContainer}>
          <Text style={styles.HeaderText}>
            Givenchy L’intempore Blossom venchy
          </Text>
          <Text style={styles.creatorText}>Rochester, NY</Text>

          <View style={styles.ratingSection}>
            <Icon name="star" size={15} color="#FFA412" />
            <Icon name="star" size={15} color="#FFA412" />
            <Icon name="star" size={15} color="#FFA412" />
            <Icon name="star" size={15} color="#FFA412" />
            <Icon name="star-half" size={15} color="#FFA412" />

            <Text style={styles.ratingNumber}>4.5</Text>
          </View>
          <Text style={styles.detailesText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
        <View style={styles.addToCardSection}>
          <TouchableOpacity style={styles.likeButton}>
            <Icon name="heart-alt" size={22} color="#A456DD" />
          </TouchableOpacity>
          <BigButton text="Add to Card" style={{flex: 1, height: 44}}
             onPress={() => {
          nav.navigate('ReviewPurchase');
        }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 16,
  },
  image: {
    height: 350,
    width: '100%',
    borderWidth: 1,
  },
  textsContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    backgroundColor: '#f5f5f5',
  },
  HeaderText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#000',
    marginBottom: 2,
  },
  creatorText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#A4A4A4',
    marginBottom: 11,
  },
  detailesText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#828282',
    lineHeight: 19,
    marginBottom: 9,
  },
  addToCardSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 16,
    columnGap: 11,
  },
  likeButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A456DD',
    borderRadius: 6,
  },
  ratingSection: {
    flexDirection: 'row',
    columnGap: 6,
    marginBottom: 18,
  },
  ratingNumber: {
    fontSize: 11,
    fontWeight: '500',
    color: '#FFA412',
    marginLeft: 2,
  },
});
