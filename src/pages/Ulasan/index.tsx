import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Ulasan = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>THANKS FOR YOUR CONTRIBUTIONS</Text>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Ulasan;