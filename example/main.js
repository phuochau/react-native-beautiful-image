import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Image from 'react-native-beautiful-image';

export default class example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Below image will be loaded successfully</Text>
        <Image style={styles.image}
          source={{ uri: 'http://celebs-place.com/gallery/miranda-kerr/1080full_miranda_kerr_(1).jpg' }} />
        <Text style={styles.headline}>Below image can't be loaded. The placeholderSource will show.</Text>
        <Image style={styles.image}
          source={{ uri: 'http://unknown.com/image.jpg' }}
          placeholderSource={require('./assets/placeholder.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  headline: {
    marginBottom: 10,
  },
});
