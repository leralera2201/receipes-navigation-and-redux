import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'

const MealItem = ({item, onSelectMeal}) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: item.imageUrl}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text style={styles.text}>{item.duration}</Text>
                        <Text style={styles.text}>{item.complexity.toUpperCase()}</Text>
                        <Text style={styles.text}>{item.affordability.toUpperCase()}</Text>
                    </View>
                </View>

            </TouchableOpacity>

        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        marginVertical: 20,
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    text: {
        fontFamily: 'open-sans'
    }
})
