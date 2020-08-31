import React from 'react'

import MealList from "../components/MealList";
import {useSelector} from "react-redux";

const CategoryMealsScreen = ({route, navigation}) => {
    const {categoryId} = route.params
    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    return (
       <MealList displayedMeals={displayedMeals} navigation={navigation} />
    )
}


export default CategoryMealsScreen
