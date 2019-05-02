import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import BasicApp from './basic_app_components/BasicApp'

export default class App extends React.Component {
  render() {
    return (
      <BasicApp />
    );
  }
}
