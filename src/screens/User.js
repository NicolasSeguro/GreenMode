import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

export default function user() {
    return (
        <View style={style.container}>
            <Text style={style.text}> User</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'NunitoBold'
    }
})