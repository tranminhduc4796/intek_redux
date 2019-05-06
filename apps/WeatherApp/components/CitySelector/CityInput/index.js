import React from 'react';
import { connect } from "react-redux";
import { TextInput } from 'react-native';
import styles from './styles'
import { changeText } from "../../../redux/actions";


class CityInputContainer extends React.Component {

    render() {
        return (
            <TextInput
                style={styles.city_input}
                onChangeText={this.props.changeText}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeText: text => dispatch(changeText(text))
    };
}

export default connect(null, mapDispatchToProps)(CityInputContainer);

