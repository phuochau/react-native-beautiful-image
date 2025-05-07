import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Image from 'react-native-beautiful-image';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beautiful Image Example</Text>
      
      <Image
        source={{ uri: 'http://celebs-place.com/gallery/miranda-kerr/1080full_miranda_kerr_(1).jpg' }}
        style={styles.image}
        onLoad={() => console.log('Image loaded')}
        onError={() => console.log('Image failed to load')}
      />

      <Image
        source={{ uri: 'https://invalid-url.com/image.jpg' }}
        placeholderSource={require('./assets/placeholder.jpg')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
}); 