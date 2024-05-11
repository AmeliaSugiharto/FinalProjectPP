import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PageHeader} from '../../components';

const Homepage = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <PageHeader />

        <View style={styles.contentWrapper} />

        <View style={styles.contentWrapper2}>
          <Text style={styles.text2}> Pet Category</Text>
          <View style={styles.horizontalWrapper}>
            <TouchableOpacity
              style={[styles.boxWrapper2, {marginLeft: 5}]}
              onPress={() => navigation.navigate('Homepage')}>
              <Image
                source={require('../../assets/image/dog.png')}
                style={styles.doglogo}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
          </View>
          <View style={styles.box}>
          </View>
          <View style={styles.box}>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD0D0',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  text2: {
    padding: 20,
    marginTop: -40,
    fontSize: 18,
    fontFamily: 'Poppins-regular',
    color: '#DD7A7A',
  },
  contentWrapper: {
    flex: -1,
  },
  contentWrapper2: {
    flex: 6,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 32,
    paddingLeft: 15,
  },
  horizontalWrapper: {
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  box: {
    flexDirection: 'row',
    width: '70%',
    height: 150,
    backgroundColor: '#FFD0D0',
    borderRadius: 20,
    marginBottom: 30,
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  boxWrapper2: {
    width: '20%',
    height: 50,
    backgroundColor: '#F9DADA',
    borderRadius: 10,
    marginBottom: 25,
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
  },
  horizontalWrapper2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doglogo: {
    width: 32,
    height: 35,
    marginLeft: 22,
    marginTop: 9,
  }
});