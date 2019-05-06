import * as React from 'react';
import {
    View,
} from 'react-native';
import CityInput from './CityInput/index'
import CityPicker from './CityPicker/index'
import Header from '../../../components/Header/Header'

class CitySelector extends React.Component {
    render() {
        return (
            <View>
                <Header title='Weather App' />
                <CityInput/>
                <CityPicker/>
            </View>
        )
    }
}

export default CitySelector;