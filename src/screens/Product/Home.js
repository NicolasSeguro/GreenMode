import { StyleSheet, Text, View } from 'react-native'

import NewProducts from '../../components/home/NewProducts'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function home() {
    return (
        <ScrollView>
           <NewProducts />
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})