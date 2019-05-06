import * as React from 'react';
import {
    View,
} from 'react-native';
import CityInput from './CityInput/index'
import CityPicker from './CityPicker/index'

class CitySelector extends React.Component {
    render() {
        return (
            <View>
                <CityInput/>
                <CityPicker/>
            </View>
        )
    }
}

export default CitySelector;