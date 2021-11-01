import { ActivityIndicator, Alert, Button, Text, View } from 'react-native'

import React from 'react'
import { StyleSheet } from 'react-native'

export default function LocationPicker() {
    return (
        <View>
            <Text style={style.encabezado}>
                AGREGAR UBICACIÓN
            </Text>
            <Button
            style={style.btnRegister}
            mode="contained"
            title='Ver cerca de mi'
            />
        </View>
    )
}

const style = StyleSheet.create ({
    encabezado: {
        marginTop: 10,
        fontSize: 18,
        color: '#37422E'
    },
    btnRegister: {
        backgroundColor: '#DD9058',
        borderRadius: 30,
        color: '#fff',
    },
})
