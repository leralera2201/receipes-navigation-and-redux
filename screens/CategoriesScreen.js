import React from 'react'
import {StyleSheet,FlatList} from 'react-native'
import {CATEGORIES} from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";

const CategoriesScreen = ({navigation}) => {
    const renderGridItem = (itemData) => {
        return (
          <CategoryItem item={itemData.item} onSelect={() => {
              navigation.navigate('CategoryMeals', {categoryId: itemData.item.id})
          }}/>
        )
    }
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default CategoriesScreen
