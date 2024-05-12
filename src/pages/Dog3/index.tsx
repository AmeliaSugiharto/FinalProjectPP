import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {BackButton} from '../../components/molecules';

const Dog3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
          <BackButton/>
        </TouchableOpacity>
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

export default Dog3;