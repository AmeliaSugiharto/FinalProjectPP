import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Article = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>ARTIKEL</Text>
      <View style={styles.contentContainer}>
        <Image
          source={require('./path/to/cat1.jpg')}
          style={styles.photo}
        />
        <View style={styles.textPlaceholder} />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require('./path/to/dog.jpg')}
          style={styles.photo}
        />
        <View style={styles.textPlaceholder} />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require('./path/to/cat2.jpg')}
          style={styles.photo}
        />
        <View style={styles.textPlaceholder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  textPlaceholder: {
    flex: 1,
    backgroundColor: 'pink',
    height: 100,
    borderRadius: 10,
  },
});

export default Article;