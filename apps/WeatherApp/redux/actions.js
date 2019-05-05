//Since strings are prone to typos and duplicates it’s better to have action types declared as constants.
export const CHANGE_TEXT = 'CHANGE_TEXT'
export const PICK_CITY = 'PICK_CITY'

export function changeText(text) {
    return {
        type: CHANGE_TEXT,
        text
    }
}

export function pickCity(city) {
    return {
        type: PICK_CITY,
        city
    }
}