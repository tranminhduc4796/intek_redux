import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class Footer extends Component {
    render() {
      return (
        <View style={{ height: 140, alignSelf: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Made by DVerse</Text>
        </View>
        );
    }
}