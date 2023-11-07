import React from 'react';
import {FlatList, View, StyleSheet, Dimensions} from 'react-native';
import Slides from '../../data';
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import BigButton from '../../components/BigButton';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('screen');
const buttonWidth = width - 40;
function Slider() {
  const nav = useNavigation();

  return (
    <View>
      <FlatList
        style={{backgroundColor: '#FFFEFE'}}
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      />
      <Pagination data={Slides} />
      <BigButton
        text={'Continue'}
        style={styles.buttonStyle}
        onPress={() => {
          nav.navigate('SignUp');
        }}
      />
    </View>
  );
}

export default Slider;

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    bottom: 45,
    width: buttonWidth,
    alignSelf: 'center',
  },
});
