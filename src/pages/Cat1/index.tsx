import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Cat1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper} />
      <View style={styles.contentWrapper2}>
        {/* Additional elements */}
        <Image
          source={require('../../assets/image/nero.png')}
          style={styles.petImage}
        />
        <Text style={styles.petName}>Nero</Text>
        <View style={styles.infoContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>Sex</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>2 years Age</Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>3 Kg weight</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.adoptButton}>
          <Text style={styles.adoptButtonText}>Adopt Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD0D0',
  },
  contentWrapper: {
    flex: 1,
  },
  contentWrapper2: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: -10,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  petImage: {
    height: 400,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 16,
    marginTop: -300,
  },
  petName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 10,
    textAlign: 'center',
    borderRadius: 30,
    padding: 10,
    backgroundColor: 'pink',
  },
  iconText: {
    marginLeft: 8,
    color: 'black',
  },
  adoptButton: {
    backgroundColor: 'pink',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  adoptButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Cat1;