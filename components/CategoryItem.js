import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View, Platform, TouchableNativeFeedback} from 'react-native'

const CategoryItem = ({item, onSelect}) => {
    let TouchableCmp = TouchableOpacity
    if(Platform.OS === 'android' && Platform.version >= 21){
        TouchableCmp = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCmp
                onPress={onSelect}
                style={{flex: 1}}
            >
                <View style={{...styles.container, backgroundColor: item.color }}>
                    <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                </View>
            </TouchableCmp>
        </View>

    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.version >= 21 ? 'hidden' : 'visible',
        elevation: 5,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.36,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,

        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize:22
    }
})

export default CategoryItem
