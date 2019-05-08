import React from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'
import styles from './styles'
import {connect} from "react-redux";

const api_endpoint = 'https://api.openweathermap.org/data/2.5/weather';
const api_key = 'APPID=f8952a6211da18964a8aa7edcfff88a6';


class WeatherInfoContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weather_data: {}
        }
    }

    __fetch_city(city_id) {
        fetch(api_endpoint + '?id=' + city_id + '&' + api_key + '&units=metric')
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    weather_data: responseJson
                });
            })
            .catch(error => console.log(error)); //to catch the errors if any
    }

    componentDidMount() {
        this.__fetch_city(this.props.pickedCity)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.pickedCity !== prevProps.pickedCity) {
            this.__fetch_city(this.props.pickedCity)
        }

    }

    render() {
        if (Object.keys(this.state.weather_data).length) {
            if (this.state.weather_data.cod !== '404') {
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
            } else {
                return <Text style={styles.weather_warning}>City Not Found</Text>
            }
        } else {
            return (
                <View/>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        pickedCity: state.pickedCity
    };
};

export default connect(mapStateToProps)(WeatherInfoContainer)