import React from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'
import styles from './styles'

const api_endpoint = 'https://api.openweathermap.org/data/2.5/weather';
const api_key = 'APPID=f8952a6211da18964a8aa7edcfff88a6';

function fetch_city(func, city_name) {
    fetch(api_endpoint + '?q=' + city_name + '&' + api_key + '&units=metric')
        .then(response => response.json())
        .then(responseJson => {
            func(responseJson);
        })
        .catch(error => console.log(error)); //to catch the errors if any
}

class WeatherInfo extends React.Component {
    render() {
        let icon_uri = 'http://openweathermap.org/img/w/' + this.state.weather_data.weather[0].icon + '.png'
        return (
            <View>
                <Image
                    source={{
                        uri: icon_uri
                    }}
                    style={styles.weather_img}
                />
                <Text style={{textAlign: 'center'}}>
                    City: {this.state.weather_data.name}
                </Text>
                <Text style={{textAlign: 'center'}}>
                    Temperature: {this.state.weather_data.main.temp}
                </Text>
                <Text style={{textAlign: 'center'}}>
                    Pressure: {this.state.weather_data.main.pressure}
                </Text>
                <Text style={{textAlign: 'center'}}>
                    Humidity: {this.state.weather_data.main.humidity}
                </Text>
            </View>
        )
    }
}

export default WeatherInfo;