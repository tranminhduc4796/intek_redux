import * as React from 'react';
import React, { AppRegistry } from 'react-native';
import BasicApp from './apps/BasicApp/BasicApp'

class ReduxApp extends React.Component {
  render() {
    return (
      <BasicApp />
    );
  }
}

AppRegistry.registerComponent('ReduxApp', () => ReduxApp);

