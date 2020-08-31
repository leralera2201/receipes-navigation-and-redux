import React from 'react'
import {View,  StyleSheet,  FlatList, Text} from 'react-native'
import MealItem from "./MealItem";
import {useSelector} from "react-redux";

const MealList = ({displayedMeals, navigation}) => {
    const favouriteMeals = useSelector(state => state.meals.favouriteMeals)

    const renderMealItem = (itemData) => {
        const isFav = favouriteMeals.find(meal => meal.id === itemData.item.id)
        return(
            <MealItem
                item={itemData.item}
                onSelectMeal={() => navigation.navigate('MealDetail',
                    {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFav
                    })}/>
        )
    }

    if(!displayedMeals.length){
        return <View style={styles.screen}><Text>There are no meals</Text></View>
    }
    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={item => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>
    )
}

export default MealList

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
