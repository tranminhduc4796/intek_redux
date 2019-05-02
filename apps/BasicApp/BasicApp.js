import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Linking,
} from 'react-native';
import movieData from '../assets/data/Info.json';
import Stylish from './Stylish.js'

const styles = StyleSheet.create({
  header_view: {
    marginTop: 23,
    width: '100%',
    backgroundColor: '#33bbff',
    color: 'white',
  },
  header_text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
});

class Header extends Component {
  render() {
    return (
      <SafeAreaView style={styles.header_view}>
        <Text style={styles.header_text}>Basic React Native App</Text>
      </SafeAreaView>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <View style={{ height: 140, alignSelf: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Made by Dverse</Text>
      </View>
    );
  }
}

class Movie extends Component {
  render() {
    return (
      <View style={{ height: '100%' }}>
        <FlatList
          data={movieData}
          renderItem={({ item }) => <Stylish movie_item={item} />}
        />
        <Footer />
      </View>
    );
  }
}

export default class BasicReactApp extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text style={{ alignSelf: 'center', marginBottom: 18, fontSize: 20, fontWeight: 'bold' }}>
          Top Ten Movies of IMDB
        </Text>
        <Movie />
      </View>
    );
  }
}
