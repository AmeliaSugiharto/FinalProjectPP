import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Homepage');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/image/Logo.png')} />
      <Text style={styles.text}>PAW PALACE</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E29C9C',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: '10%',
    left: '10%',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
    color: '#E8D4CB',
    bottom: 100,
  },
});
