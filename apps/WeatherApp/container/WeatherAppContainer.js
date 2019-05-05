import React from 'react'
import CitySelector from '../components/CitySelector'

export default class WeatherAppContainer extends React.Component{
    render() {
        return(
            <View>
                <CitySelector />
            </View>
        )
    }
}