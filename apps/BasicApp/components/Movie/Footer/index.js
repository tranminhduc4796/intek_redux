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

class Footer extends Component {
    render() {
      return (
        <View style={{ height: 140, alignSelf: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Made by Dverse</Text>
        </View>
      );
    }
  }