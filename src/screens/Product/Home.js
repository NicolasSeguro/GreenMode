import { StyleSheet, Text, View } from 'react-native'

import Banners from '../../components/home/Banners'
import NewProducts from '../../components/home/NewProducts'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Search from '../Search'

export default function home() {
    return (
        <ScrollView>
            <Banners></Banners>
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