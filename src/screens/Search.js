import { ScrollView, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import SearchBarArrow from '../components/Search/SearchBar'
import { Searchbar } from 'react-native-paper'

export default function search() {
    return (
        <View>
            <SearchBarArrow/>
             {/* <SearchBar/> */}
        </View>
    )
}
