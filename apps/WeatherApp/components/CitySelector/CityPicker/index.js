import * as React from 'react';
import {
    Text,
    View,
    Picker,
    Image,
} from 'react-native';
import {connect} from "react-redux";
import styles from './styles'
import {pickCity} from "../../../redux/actions";


class CityPickerContainer extends React.Component {
    render() {
        let city_list = this.props.cities.map(city => {
            return <Picker.Item label={city.name} value={city.name}/>
        })
        return (
            <Picker
                selectedValue={this.props.pickedCity}
                style={styles.city_picker}
                itemStyle={{height: 160}}
                onValueChange={this.props.pickCity}
            >
                {city_list}
            </Picker>
        )
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities,
        pickedCity: state.pickedCity
    };
};

function mapDispatchToProps(dispatch) {
    return {
        pickCity: city => dispatch(pickCity(city))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityPickerContainer)
