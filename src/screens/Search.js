import { ScrollView, StyleSheet, Text, View } from 'react-native'

import React from 'react'

export default function search() {
    return (
        <View style={style.container}>
            <Text> Buscar</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})