import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButton from "../components/HeaderButton";
import Favourites from "../screens/Favourites";
import {Ionicons} from '@expo/vector-icons'
import FiltersMealsScreen from "../screens/FiltersMealsScreen";
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Non-serializable values were found in the navigation state',
]);

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const FavStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#ffffff'
    },
    headerTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTitleBackStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,

}


function MyStack() {
    return (
        <Stack.Navigator screenOptions={defaultNavOptions}>
            <Stack.Screen name="Categories" component={CategoriesScreen}  options={({navigation})=>{
                return {
                    title: 'Meal Categories',
                    headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title='Favourite' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
                    </HeaderButtons>
                }

            }}/>
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} options={({route}) => {
                const category = CATEGORIES.find(cat => cat.id === route.params.categoryId)
                return {
                    title: category.title,
                }
            }}/>
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={({route}) => {
                return {
                    title: route.params.mealTitle,
                    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title='Favourite' iconName={route.params.isFav ? 'ios-star' : 'ios-star-outline'} onPress={() => route.params.toggleFav()}/>
                    </HeaderButtons>
                }
            }}/>
        </Stack.Navigator>
    );
}

function MyFavStack() {
    return (
        <FavStack.Navigator screenOptions={defaultNavOptions}>
            <FavStack.Screen name="Favourites" component={Favourites}  options={({navigation}) => {
                return {
                    title: 'Favourites',
                    headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title='Favourite' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
                    </HeaderButtons>
                }

            }}/>
            <FavStack.Screen name="MealDetail" component={MealDetailScreen} options={({route}) => {
                return {
                    title: route.params.mealTitle,
                    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title='Favourite' iconName={route.params.isFav ? 'ios-star' : 'ios-star-outline'} onPress={() => route.params.toggleFav()}/>
                    </HeaderButtons>
                }
            }}/>
        </FavStack.Navigator>
    );
}


function MyTabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: Colors.accentColor,
        }}>
            <Tab.Screen name="Categories" component={MyStack} options={{
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name={'ios-restaurant'} size={25} color={tabInfo.color}/>
                },
                tabBarLabel: 'Meals'
            }}/>
            <Tab.Screen name="Favourites" component={MyFavStack} options={{
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name={'ios-star'} size={25} color={tabInfo.color}/>
                }
            }}/>
        </Tab.Navigator>
    );
}

const FilterStack = createStackNavigator()

function MyFilterStack() {
    return <FilterStack.Navigator screenOptions={defaultNavOptions}>
        <FilterStack.Screen name="Filters" component={FiltersMealsScreen} options={({navigation, route}) => {
            return {
                headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title='Favourite' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
                </HeaderButtons>,
                headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title='Save' iconName='ios-save' onPress={() => {route.params.save(); navigation.navigate('Categories')}}/>
                </HeaderButtons>
            }

        }}/>
    </FilterStack.Navigator>
}

function MyStackDrawer() {
    return (
        <Drawer.Navigator  drawerContentOptions={{
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans'
            }
        }}>
            <Drawer.Screen name="Categories" component={MyTabs} options={{
                drawerLabel: 'Meals'
            }}/>
            <Drawer.Screen name="Filters" component={MyFilterStack} options={{title: 'Filters'}}/>
        </Drawer.Navigator>
    );
}
export default MyStackDrawer
