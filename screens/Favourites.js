import React from 'react'
import MealList from "../components/MealList";
import {useSelector} from "react-redux";

const Favourites = ({navigation}) => {
    const meals = useSelector(state => state.meals.favouriteMeals)
    return (
        <MealList displayedMeals={meals} navigation={navigation}/>
    )
}


export default Favourites
