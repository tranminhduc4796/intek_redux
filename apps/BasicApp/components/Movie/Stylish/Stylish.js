import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    Linking,
} from 'react-native';
import Dimensions from 'Dimensions';
import styles from './styles.js'

const {height, width} = Dimensions.get('window');

export default class Stylish extends Component {
    constructor(props) {
        super(props)
        this.props = {
            movie_item: {}
        }
    }

    render() {
        return (
            <View style={{padding: 10, marginBottom: 10}}>
                <Text style={styles.post_title}>{this.props.movie_item.title}</Text>
                <Image
                    source={{uri: this.props.movie_item.image}}
                    style={{
                        width: width - 24,
                        height: height * 0.7,
                    }}
                    resizeMode="stretch"
                    resizeMethod="auto"
                />
                <TouchableOpacity
                    style={styles.post_button}
                    color="#841584"
                    onPress={() => {
                        Linking.openURL(this.props.movie_item.url);
                    }}>
                    <Text style={{alignSelf: 'center', color: '#33bbff'}}>
                        More Info
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}