import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducer'
import WeatherAppContainer from './container/WeatherAppContainer'
const store = createStore(rootReducer);

export default class App extends React.Component{
    render() {
        return(
            <Provider store={store}>
                <WeatherAppContainer />
            </Provider>
        )
    }
}