import React, {Component} from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import movieData from '../../assets/data/Info.json';
import Stylish from './Stylish/Stylish'
const {height, width} = Dimensions.get('window');

export default class Movie extends Component {
    render() {
        return (
            <FlatList
                style={{height: height * 0.7}}
                data={movieData}
                renderItem={({item}) => <Stylish movie_item={item}/>}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}
