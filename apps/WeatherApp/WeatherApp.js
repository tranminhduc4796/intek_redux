import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CitySelector from './components/CitySelector/CitySelector'
import cities from './assets/data/city.list'

const store = createStore(rootReducer, {cities: cities});

export default class WeatherApp extends React.Component{
    render() {
        console.log(store);
        return(
            <Provider store={store}>
                <CitySelector />
            </Provider>
        )
    }
}