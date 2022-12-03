import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from './CustomButton'

export default function ListItemTask({ task, number, onPress }) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.numberContainer}>
                <Text 
                    style={{ 
                        fontSize: 16, 
                        fontWeight: 'bold', 
                        color: '#FFF'
                    }}>{number}#</Text>
            </View>
            <View style={{
                marginLeft: 8,
                flex: 1
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>{task}</Text>
            </View>
            <View>
                <CustomButton 
                    icon="minus-circle-outline"
                    onPress={onPress}>
                    Delete
                </CustomButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 8,
        marginVertical: 4,
        padding: 8,
        elevation: 4, // android
    },
    numberContainer: {
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#000',
        margin: 4,
        padding: 4
    }
})