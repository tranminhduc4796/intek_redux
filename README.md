# Redux App

A React-native app provides the Top 10 Rating IMDB Movies and the current weather of any cities in Viet Nam.
  
## Installation
There are 2 ways to see how the app works online:
1. Go to the  this [Snack](https://snack.expo.io/), import the [Git Link](https://github.com/tranminhduc4796/intek_redux.git) and run the IOS emulator.
2. Install the Snack Expo App in the App Store and then scan the below QR Code:

    ![QR Code](./QR_code.png)

(This project has not been modified to run in local yet)
## Features
* IMDB:
    * Show a list of 10 rating movies on IMDB descending.
* Weather App:
    * Show the weather info (Temperature, Pressure, Humidity) and an weather icon for the choosing city.
    * Intergrate a search bar for the city name.

## Built with
* [React Native](https://facebook.github.io/react-native/)
* [Redux](https://redux.js.org/) - ^4.0.1
* [React Redux](https://react-redux.js.org/) - ^5,1,1
* [React Navigation](https://reactnavigation.org/) - ^2.18.0

## File Structure
* *App.js*: The main file in the project.
* *Apps*: The main app is divided in separated smaller apps and all are in this directory.
* *Components*: An app is divided into small components and the same with each components. Files for developing these components are stored in this directory.
* *Redux*: Contain all files (actions, reducers) for the Redux library.

## Acknowledgments
* [React Redux Tutorial for Beginners: The Definitive Guide (2019)](https://www.valentinog.com/blog/redux/)
* [Changing fetch request url dynamically when state updates in React](https://stackoverflow.com/questions/50728509/changing-fetch-request-url-dynamically-when-state-updates-in-react?fbclid=IwAR2zmBqto05u3L5E5SdMZxyy_70Q9KXxfJ7vzJxuwqij9fkFEzSv2c4Cqa8)