import {MEALS} from "../../data/dummy-data";
import {SET_FILTERS, TOGGLE_FAVOURITE} from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.payload)
            if(existingIndex >= 0){
                const updatedFavourites = [...state.favouriteMeals]
                updatedFavourites.splice(existingIndex, 1)
                return {...state, favouriteMeals: updatedFavourites}
            }else {
                const newFavourites = state.meals.find(meal => meal.id === action.payload)
                return {...state, favouriteMeals: [...state.favouriteMeals, newFavourites]}
            }
        case SET_FILTERS:
            const {isVegan, isVegetarian, isLactoseFree, isGlutenFree} = action.payload
            const filteredMeals = state.meals.filter(meal => {
                if(isVegan && !meal.isVegan){
                    return false
                }
                if(isVegetarian && !meal.isVegetarian){
                    return false
                }
                if(isLactoseFree && !meal.isLactoseFree){
                    return false
                }
                if(isGlutenFree && !meal.isGlutenFree){
                    return false
                }
                return true
            })
            return {...state, filteredMeals: filteredMeals}
        default: return state
    }
}

export default mealsReducer
