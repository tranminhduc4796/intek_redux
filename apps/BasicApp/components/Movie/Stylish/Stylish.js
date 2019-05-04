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
    render() {
        return (
            <View style={{padding: 10, marginBottom: 10}}>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.3)',
                        borderBottomWidth: 0,
                    }}>
                    <Text style={styles.post_title}>{this.props.movie_item.title}</Text>
                </View>
                <View style={{borderColor: 'rgba(0,0,0,0.3)', borderWidth: 1}}>
                    <Image
                        source={{uri: this.props.movie_item.image}}
                        style={{
                            width: width - 24,
                            height: height * 0.7,
                        }}
                        resizeMode="stretch"
                        resizeMethod="auto"
                    />
                </View>
                <View style={styles.post_button}>
                    <TouchableOpacity
                        style={{
                            borderColor: '#33bbff',
                            borderWidth: 1,
                            borderRadius: 8,
                            padding: 2,
                        }}
                        color="#841584"
                        onPress={() => {
                            Linking.openURL(this.props.movie_item.url);
                        }}>
                        <Text style={{alignSelf: 'center', color: '#33bbff'}}>
                            More Info
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}