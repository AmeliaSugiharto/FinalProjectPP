import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Ulasan = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.pinkContainer}>
        <Text style={styles.header}>THANKS FOR YOUR CONTRIBUTIONS</Text>
        <Image
          source={require('../../assets/image/rating.png')}
          style={styles.rating}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pinkContainer: {
    backgroundColor: '#EAA7A7',
    padding: 16,
    borderRadius: 8,
    marginTop: 230,
    width: 313,
    height: 311,
    margin: 50,
    borderRadius: 20,
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#DD7A7A',
  },
  rating: {
    marginTop: 34,
    marginLeft: 25,
  },
});

export default Ulasan;