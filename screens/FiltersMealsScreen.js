import React, {useState, useCallback, useEffect} from 'react'
import {StyleSheet, View, Text, Switch, Platform} from 'react-native'
import Colors from "../constants/Colors";
import {useDispatch} from "react-redux";
import {setFilters} from "../store/actions/meals";

const SwitchComponent = (props) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{true: Colors.primaryColor}}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                value={props.state}
                onValueChange={(newValue) => props.onChange(newValue)}
            />
        </View>
    )
}

const FiltersMealsScreen = ({navigation}) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const dispatch = useDispatch()

    const saveFilters = useCallback(() => {
        const filtersObj = {
            isLactoseFree,
            isVegan,
            isVegetarian,
            isGlutenFree
        }
       dispatch(setFilters(filtersObj))
    }, [isGlutenFree, isVegetarian, isVegan, isLactoseFree, dispatch])

    useEffect(() => {
        navigation.setParams({save: saveFilters})
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filters / Restrictions</Text>
            <SwitchComponent label={'Gluten free'} state={isGlutenFree} onChange={setIsGlutenFree}/>
            <SwitchComponent label={'Lactose free'} state={isLactoseFree} onChange={setIsLactoseFree}/>
            <SwitchComponent label={'Vegan'} state={isVegan} onChange={setIsVegan}/>
            <SwitchComponent label={'Vegetarian'} state={isVegetarian} onChange={setIsVegetarian}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    }
})

export default FiltersMealsScreen
