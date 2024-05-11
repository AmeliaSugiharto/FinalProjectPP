import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/image/Started.png')} style={styles.logo} />

      <View style={styles.textContainer}>
        <Text style={styles.text}>Ready to make a</Text>
        <Text style={styles.text}>new friend?</Text>
        <Text style={styles.text1}>
          Caring Together: Your Contribution, Their
        </Text>
        <Text style={styles.text1}>Second Chance</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Get Started >> </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStartedScreen;