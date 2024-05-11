import React from 'react';
import {View,  StyleSheet, } from 'react-native';

const Dog1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9DADA', 
  },
  containerImage:{
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
    height: 830,
    borderRadius: 50,
    top: 300,
  },
});

export default Dog1;
