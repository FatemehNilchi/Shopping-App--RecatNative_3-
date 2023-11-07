import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';

const HorizontalScrollView = props => {
  const {style, children} = props;
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={style}>
      <View style={styles.cardRow}>{children}</View>
    </ScrollView>
  );
};

export default HorizontalScrollView;

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 12,
    paddingHorizontal: 20,
  },
});
