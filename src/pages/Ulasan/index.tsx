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
        <TextInput
          style={styles.input}
          placeholder="Share your experience with us"
          placeholderTextColor="#CCC9C9"
        /><View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Homepage')}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Homepage')}>
          <Text style={styles.buttonText1}>Post</Text>
        </TouchableOpacity>
      </View>
      </view>
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
  input: {
    borderWidth: 1,
    borderColor: '#DD7A7A',
    backgroundColor: '#ffff',
    borderRadius: 8,
    marginTop: 30,
    marginLeft: 4,
    width: 273,
    height: 85,
    fontSize: 12,
    fontFamily: 'Poppins-Regular'
  },
});

export default Ulasan;