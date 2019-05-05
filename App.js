import * as React from 'react';
import {AppRegistry} from 'react-native';
import BasicApp from './apps/BasicApp/BasicApp'
import WeatherApp from './apps/WeatherApp/container/WeatherApp'

class ReduxApp extends React.Component {
    render() {
        return (
            //  Basic App
            <WeatherApp/>
        );
    }
}

export default ReduxApp;
AppRegistry.registerComponent('ReduxApp', () => ReduxApp);

