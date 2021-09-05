import { StyleSheet, View } from 'react-native'

import React from 'react'
import { Searchbar } from 'react-native-paper'

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <SearchBar placeholder="Buscar"></SearchBar>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#000',
        paddingVertical: 40,
        paddingHorizontal:20,
        zIndex: 1
    }
})
