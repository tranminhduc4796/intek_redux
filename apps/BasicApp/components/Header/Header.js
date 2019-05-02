import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
} from 'react-native';
import styles from './styles'

export default class Header extends Component {
    render() {
      return (
        <SafeAreaView style={styles.header_view}>
          <Text style={styles.header_text}>Basic React Native App</Text>
        </SafeAreaView>
      );
    }
}