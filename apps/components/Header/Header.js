import React, {Component} from 'react';
import {
    Text,
    SafeAreaView,
} from 'react-native';
import styles from './styles'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.props = {
            'title': 'Title'
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.header_view}>
                <Text style={styles.header_text}>{this.props.title}</Text>
            </SafeAreaView>
        );
    }
}