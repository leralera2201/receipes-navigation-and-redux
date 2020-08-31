import React, {useEffect, useCallback} from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {toggleFavourite} from "../store/actions/meals";

const ListItem = (props) => (
    <View style={styles.listItem}>
        <Text style={styles.text}>{props.children}</Text>
    </View>
)
const MealDetailScreen = ({navigation, route}) => {
    const {mealId} = route.params
    const meals = useSelector(state => state.meals.meals)
    const favouriteMeals = useSelector(state => state.meals.favouriteMeals)
    const isFavMeals = favouriteMeals.some(meal => meal.id === mealId)
    const mealDetail = meals.find(meal => meal.id === mealId)
    const dispatch = useDispatch()

    const toggleFavouriteHandler = useCallback(() => {
        dispatch(toggleFavourite(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        navigation.setParams({toggleFav: toggleFavouriteHandler})
    }, [toggleFavouriteHandler])

    useEffect(() => {
        navigation.setParams({isFav: isFavMeals})
    }, [isFavMeals])

    return (
        <ScrollView>
            <Image source={{uri: mealDetail.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <Text style={styles.text}>{mealDetail.duration}m</Text>
                <Text style={styles.text}>{mealDetail.complexity}</Text>
                <Text style={styles.text}>{mealDetail.affordability}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {mealDetail.ingredients.map(ing => <ListItem key={ing}>{ing}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {mealDetail.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    text: {
        fontFamily: 'open-sans'
    },
    listItem:{
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default MealDetailScreen
