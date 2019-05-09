import * as React from 'react';
import {AppRegistry} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import BasicApp from './apps/BasicApp/BasicApp'
import WeatherApp from './apps/WeatherApp/index'
import Home from './apps/Home/Home'

const AppNavigator = createStackNavigator({
        HomeScreen: {screen: Home},
        BasicAppScreen: {screen: BasicApp},
        WeatherAppScreen: {screen: WeatherApp},
    }
)

class ReduxApp extends React.Component {
    render() {
        return (
            <AppNavigator/>
        );
    }
}

export default ReduxApp;
AppRegistry.registerComponent('ReduxApp', () => ReduxApp);

