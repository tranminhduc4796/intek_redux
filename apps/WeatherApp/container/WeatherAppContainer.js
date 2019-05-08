import React from 'react'
import { View } from 'react-native'
import CitySelector from '../components/CitySelector/CitySelector'
import WeatherInfo from '../components/WeatherInfo/WeatherInfo'

class WeatherAppContainer extends React.Component{
    render() {
        return(
            <View>
                <CitySelector />
                <WeatherInfo />
            </View>
        )
    }
}

export default WeatherAppContainer;