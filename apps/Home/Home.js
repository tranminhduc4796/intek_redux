import React from 'react'
import {View, Text, Button} from 'react-native'

export default class Home extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Choose the app you want to use
                </Text>
                <Button onPress={() => this.props.navigation.navigate('BasicAppScreen')} title="Basic App"/>
                <Button onPress={() => this.props.navigation.navigate('WeatherAppScreen')} title="Weather App"/>
            </View>
        )
    }
}