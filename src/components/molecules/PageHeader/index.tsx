import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PageHeader = () => {
  return (
    <View>
      <Text style={styles.text1}>Hi Petpals,</Text>
      <Text style={styles.text2}>let’s choose a pet as</Text>
      <Text style={styles.text2}>your companion</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  text1: {
    padding: 20,
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#DD7A7A',
  },
  text2: {
    padding: 20,
    marginTop: -40,
    fontSize: 18,
    fontFamily: 'Poppins-regular',
    color: '#DD7A7A',
  },
});
