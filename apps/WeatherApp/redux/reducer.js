import cities from '../assets/data/city.list.json'
import { CHANGE_TEXT, PICK_CITY } from './actions'

let initialState = {
    cities: cities,
    pickedCity: cities[0].id
}

function process_text(text) {
    let cities_clone = [];
    cities.map(item => {
        // Remove accent
        let no_accent_name = item.name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[đð]/g, "d")
            .replace(/[\u0300-\u036f]/g, '');
        if (no_accent_name.includes(text)) {
            cities_clone.push(item);
        }
    });
    return cities_clone;
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TEXT:
            let cities_clone = process_text(action.text)
            let pickedCity = {}
            if (cities_clone.length > 0) {
                pickedCity = cities_clone[0].id
            } else {
                pickedCity = {}
            }
            return Object.assign({}, state, {
                cities: cities_clone,
                pickedCity: pickedCity
            })
        case PICK_CITY:
            if (state.cities) {
                return Object.assign({}, state, {
                    pickedCity: action.city
                })
            }
        default:
            return state


    }
    return state
}

export default rootReducer;