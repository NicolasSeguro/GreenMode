import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import React from 'react'

export default function SearchHistory(props) {
    const  { showHistory } = props;
    return (
        <View style={[
            showHistory ? styles.history : styles.hidden, {top: 90, left: 30}
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})
