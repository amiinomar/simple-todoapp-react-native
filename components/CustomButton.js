import React from 'react'
import { Pressable, StyleSheet, Text, Platform, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function CustomButton({ children, onPress, color, textColor, icon }) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.btnContainer,
                color ? { backgroundColor: color } : null,
                pressed ? { opacity: 0.7, backgroundColor: '#CCC' } : null
            ]}
            onPress={onPress}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <MaterialCommunityIcons name={icon} color={"#FFF"} size={26} />
                    <Text style={[
                        styles.textBtn, 
                        textColor ? { color: textColor } : null
                    ]}>{children}</Text>
                </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        padding: 10,
        margin: 6,
        borderRadius: 8,
        backgroundColor: '#fa3425',
        elevation: 4,
    },
    textBtn: { 
        color: '#FFF', 
        fontSize: 16,
        marginHorizontal: 4
    }
})