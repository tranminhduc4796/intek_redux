import * as React from 'react';
import {AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';
import BasicApp from './apps/BasicApp/BasicApp'
import WeatherApp from './apps/WeatherApp/index'
import Home from './apps/Home/Home'

const AppNavigator = StackNavigator({
    BasicAppScreen: {screen: BasicApp},
    WeatherAppScreen: {screen: WeatherApp},
    HomeScreen: {screen: Home}
})



class ReduxApp extends React.Component {
    render() {
        return (
            <AppNavigator/>
        );
    }
}

export default ReduxApp;
AppRegistry.registerComponent('ReduxApp', () => ReduxApp);

