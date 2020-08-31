export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE'
export const SET_FILTERS = 'SET_FILTERS'

export const toggleFavourite = (id) => {
    return {type: TOGGLE_FAVOURITE, payload: id}
}

export const setFilters = (filters) => {
    return {type: SET_FILTERS, payload: filters}
}
