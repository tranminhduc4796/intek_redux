import React from 'react'
import { View } from 'react-native'
import CitySelector from '../components/CitySelector/CitySelector'

class WeatherAppContainer extends React.Component{
    render() {
        return(
            <View>
                <CitySelector />
            </View>
        )
    }
}

export default WeatherAppContainer;