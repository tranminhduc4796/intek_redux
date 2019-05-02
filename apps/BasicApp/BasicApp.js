import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Movie from './components/Movie/Movie'
import Header from './components/Header/Header'

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