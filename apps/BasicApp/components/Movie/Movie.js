import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import movieData from '../../assets/data/Info.json';
import Stylish from './Stylish/Stylish'
import Footer from './Footer/Footer'

export default class Movie extends Component {
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
