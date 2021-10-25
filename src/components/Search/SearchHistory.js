import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

export default function SearchHistory(props) {
    const  { showHistory } = props;
    return (
        <View style={[
            showHistory ? styles.history : styles.hidden
        ]}>
            <Text>Historial</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    hidden: {
        display: 'none',
    },
    history: {
        position: 'absolute',
        width: 300,
        height: 500,
    }
})
