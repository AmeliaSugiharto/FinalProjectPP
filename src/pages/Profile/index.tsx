import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Homepage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>PROFILE</Text>
      <View style={styles.contentWrapper} />
      <View style={styles.contentWrapper2}>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <View style={styles.addPhoto}>
              <TouchableOpacity>
                <Image source={require('../../assets/image/avatar.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.contentWrapper3} />
      <View style={styles.horizontalWrapper2} />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD0D0',
  },
  text1: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 35,
    fontFamily: 'WorkSans',
    color: '#000000',
  },
  contentWrapper: {
    flex: 1,
  },
  contentWrapper2: {
    flex: 5,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  contentWrapper3: {
    flex: 0.1,
  },
  profileContainer: {
    marginTop: -80,
    alignItems: 'center',
  },
  profile: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
    width: 160,
    borderRadius: 200 / 2,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  addPhoto: {
    backgroundColor: '#F0F0F0',
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    width: 40,
    textAlign: 'center',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginHorizontal: 20,
    marginTop: 50,
  },
});
