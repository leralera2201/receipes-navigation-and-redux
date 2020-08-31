import {createStore, combineReducers} from 'redux'
import {} from 'react-redux'
import mealsReducer from "./reducers/meals";

const rootReducer = combineReducers({
    meals: mealsReducer
})

const store=createStore(rootReducer)

export default store
