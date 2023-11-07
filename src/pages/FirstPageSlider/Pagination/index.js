import {StyleSheet, View} from 'react-native';
import React from 'react';

const Pagination = ({data}) => {
  return (
    <View style={styles.container}>
      {/* {
        data.map((_,idx)=>{
            return <View key={idx.toString()} style={styles.dot}/>
        })
     } */}

      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.line} />
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '75%',
    flexDirection: 'row',

    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
    backgroundColor: '#F0DBFF',
  },
  line: {
    width: 24,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
    backgroundColor: '#A456DD',
  },
});
