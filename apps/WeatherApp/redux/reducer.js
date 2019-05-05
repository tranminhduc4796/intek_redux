import cities from '../assets/data/city.list.json'
import { CHANGE_TEXT, PICK_CITY } from './actions'

let initialState = {
    cities: cities,
    pickCity: {}
}

function process_text(text) {
    let cities_clone = [];
    cities.map(item => {
        // Remove accent
        let no_accent_name = item.name
            .normalize('NFD')
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
            return Object.assign({}, state, {
                cities: cities_clone
            })
        case PICK_CITY:
            if (state.cities) {
                return Object.assign({}, state, {
                    pickCity: state.cities[0]
                })
            }
        default:
            return state


    }
    return state
}

export default rootReducer;