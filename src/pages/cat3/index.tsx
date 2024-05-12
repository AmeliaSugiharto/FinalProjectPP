import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper} />
      <View style={styles.contentWrapper2} />
      <View style={styles.contentWrapper3} />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD0D0',
  },
  contentWrapper: {
    flex: 1,
  },
  contentWrapper2: {
    flex: 4,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  contentWrapper3: {
    flex: 0.5,
  },
});