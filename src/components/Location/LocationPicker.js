import { ActivityIndicator, Alert, Button, Text, View } from 'react-native'

import React from 'react'
import locationStyle from '../../Styles/location'

export default function LocationPicker() {
    return (
        <View style={[locationStyle.view]}>
            <Text style={[locationStyle.boxModel, locationStyle.btnText]}>
                AGREGAR UBICACIÓN
            </Text>
            <Button
            style={[locationStyle.btnRegister, locationStyle.boxModel]} 
            mode="contained"
            title='Ver cerca de mi'
            />
        </View>
    )
}
