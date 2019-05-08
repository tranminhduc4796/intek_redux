import React from 'react'
import { View } from 'react-native'
import CitySelector from '../components/CitySelector/CitySelector'
import WeatherInfo from '../components/WeatherInfo/WeatherInfo'
import FBButton from '../../components/FBButton/FBButton'
import Header from '../../components/Header/Header'


class WeatherAppContainer extends React.Component{
    render() {
        return(
            <View>
                <Header title='Weather App' />
                <FBButton />
                <CitySelector />
                <WeatherInfo />
            </View>
        )
    }
}

export default WeatherAppContainer;