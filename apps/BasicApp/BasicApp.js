import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import Movie from './components/Movie/Movie'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default class BasicReactApp extends Component {
    render() {
        return (
            <View>
                <Header title='Basic React Native App'/>
                <Text style={{alignSelf: 'center', marginBottom: 18, fontSize: 20, fontWeight: 'bold'}}>
                    Top Ten Movies of IMDB
                </Text>
                <Movie/>
                <Footer/>
            </View>
        );
    }
}