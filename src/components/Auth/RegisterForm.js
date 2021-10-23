import { Button, TextInput } from 'react-native-paper'
import { Text, View } from 'react-native'

import { FormStyles } from '../../Styles'
import React from 'react'

export default function RegisterForm() {
    return (
        <View style={[FormStyles.view]}>
            <Text style={[FormStyles.boxModel, FormStyles.btnText]}>
                REGISTRATE
            </Text>
            <Text>
                Crea una cuenta en GreenMode y obtén las siguientes ventajas:
            </Text>
            <TextInput 
            label="Email"
            style={[FormStyles.input]}
            />
            <TextInput 
            label="Contraseña"
            style={[FormStyles.input]}
            secureTextEntry
            />
            <TextInput 
            label="Repetir contraseña"
            style={[FormStyles.input]}
            secureTextEntry
            />       
            <Button style={[FormStyles.btnRegister]} mode="contained">Registrarme</Button>  
            <Button style={[]} mode="text" >¿Ya tenés cuenta?  Inicia sesión aquí</Button>
        </View>
    )
}
