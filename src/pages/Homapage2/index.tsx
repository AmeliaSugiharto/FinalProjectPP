import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {PageHeader} from '../../components';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <PageHeader />

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
    flex: -1,
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